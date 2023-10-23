import {useEffect, useState} from 'react'
import * as WoWAPI from '../utilities/WoWAPI'

export default function GearItem( props ) {
    const item = props.item
    const region = props.region
    const [gearIcon, setGearIcon] = useState()

    useEffect(() => {
        async function getData() {
            const gearIconData = await WoWAPI.fetchGearIcon(item.media.id, region)
            setGearIcon(gearIconData)
        }
        getData()
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