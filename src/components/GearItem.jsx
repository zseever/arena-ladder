import {useEffect, useState} from 'react'

export default function GearItem( props ) {
    const apiKey = props.apiKey
    const item = props.item
    const region = props.region
    const [gearIcon, setGearIcon] = useState()

    useEffect(function() {
        async function fetchGearIcon(itemId, rgn) {
            const url = `https://${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/data/wow/media/item/${itemId}?namespace=static-3.4.3_51505-classic-${ rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=${apiKey}`
            const charResults = await fetch(url)
            const jsonData = await charResults.json()
            setGearIcon(jsonData)
        }
        fetchGearIcon(item.media.id, region)
        console.log(gearIcon)
    },[])


    return (
        <div className="item-cont">
            {gearIcon && gearIcon.assets &&
                <>
                <div className={`${item.quality.type.toLowerCase()} item-icon`}>
                    <img src={gearIcon.assets[0].value}></img>
                </div>
                <div className={`${item.quality.type.toLowerCase()}`}>
                    {item.name}
                </div>

                </>
            }
        </div>
    )
}