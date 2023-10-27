import { useEffect, useState } from "react"
import GearItem from "./GearItem"
import * as WoWAPI from '../utilities/WoWAPI'

export default function Gear( props ) {
    const charDetails = props.charData
    const [charData, setCharData] = useState()
    const gearOrder = ['HEAD','NECK','SHOULDER','BACK','CHEST','SHIRT','TABARD','WRIST','HANDS','WAIST','LEGS','FEET','FINGER_1','FINGER_2','TRINKET_1','TRINKET_2','MAIN_HAND','OFF_HAND','RANGED']

    useEffect(() => {
        async function getData() {
            const gearLookup = {}
            const gearData = await WoWAPI.fetchGear(charDetails.charName, charDetails.server, charDetails.region)
            gearData.equipped_items.forEach(item => { 
                gearLookup[item.slot.type] = {name: item.name, slot: item.slot.type, id: item.media.id, enchants: item.enchantments, quality: item.quality.type}
            })
            setCharData(gearLookup)
        }
        getData()
    },[])

    return (
        <div className="equipment-cont">
            <div className="armor-cont">
                <div className="left-armor-cont">
                {charData && gearOrder.slice(0,8).map((slot) => 
                    <GearItem item={charData[slot]} region={charDetails.region} orientation='left' />
                )}
                </div>
                <div className="right-armor-cont">
                {charData && gearOrder.slice(8,16).map((slot) => 
                    <GearItem item={charData[slot]} region={charDetails.region} orientation='right' />
                )}
                </div>
            </div>
            <div className="weapon-cont">
            {charData && gearOrder.slice(16,19).map((slot) => 
                <GearItem item={charData[slot]} region={charDetails.region} orientation='bottom'/>
            )}
            </div>

        </div>
    )
}