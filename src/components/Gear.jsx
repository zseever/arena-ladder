import { useEffect, useState } from "react"
import GearItem from "./GearItem"

export default function Gear( props ) {
    const apiKey = props.apiKey
    const charDetails = props.charData
    const [charData, setCharData] = useState()

    useEffect(function() {
        async function fetchGear(charName, server, rgn) {
            const url = `https://${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/profile/wow/character/${server}/${charName.toLowerCase()}/equipment?namespace=profile-classic-${ rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=${apiKey}`
            const charResults = await fetch(url)
            const jsonData = await charResults.json()
            setCharData(jsonData)
        }
        fetchGear(charDetails.charName, charDetails.server, charDetails.region)
        console.log(charData)
    },[])

    return (
        <div className="equipment-cont">
        {charData && charData.equipped_items.map((item,idx) => 
            <GearItem apiKey={apiKey} item={item} region={charDetails.region}/>
        )}
        </div>
    )
}