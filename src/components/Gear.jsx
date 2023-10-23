import { useEffect, useState } from "react"
import GearItem from "./GearItem"
import * as WoWAPI from '../utilities/WoWAPI'

export default function Gear( props ) {
    const charDetails = props.charData
    const [charData, setCharData] = useState()

    useEffect(() => {
        async function getData() {
            const gearData = await WoWAPI.fetchGear(charDetails.charName, charDetails.server, charDetails.region)
            setCharData(gearData)
        }
        getData()
    },[])

    return (
        <div className="equipment-cont">
            {charData && charData.equipped_items.map((item,idx) => 
                <GearItem item={item} region={charDetails.region}/>
            )}
        </div>
    )
}