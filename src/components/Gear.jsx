import { useEffect, useState } from "react"
import GearItem from "./GearItem"
import * as GearInformation from '../utilities/GearInformation'

export default function Gear( {charDetails} ) {
    const [charData, setCharData] = useState()
    const gearOrder = ['HEAD','NECK','SHOULDER','BACK','CHEST','SHIRT','TABARD','WRIST','HANDS','WAIST','LEGS','FEET','FINGER_1','FINGER_2','TRINKET_1','TRINKET_2','MAIN_HAND','OFF_HAND','RANGED']

    useEffect(() => {
        async function getData() {
            const gearInfo = await GearInformation.getGearInformation(charDetails.charName, charDetails.server, charDetails.region)
            setCharData(gearInfo)
        }
        getData()
    },[])

    return (
        <div className="equipment-cont">
            <div className="armor-cont">
                <div className="left-armor-cont">   
                {charData && gearOrder.slice(0,8).map((slot) => 
                    <GearItem key={slot} slot={slot} item={charData[slot]} region={charDetails.region} orientation='left' />
                )}
                </div>
                <div className="right-armor-cont">
                {charData && gearOrder.slice(8,16).map((slot) => 
                    <GearItem key={slot} slot={slot} item={charData[slot]} region={charDetails.region} orientation='right' />
                )}
                </div>
            </div>
            <div className="weapon-cont">
            {charData && gearOrder.slice(16,19).map((slot) => 
                <GearItem key={slot} slot={slot} item={charData[slot]} region={charDetails.region} orientation='bottom'/>
            )}
            </div>

        </div>
    )
}