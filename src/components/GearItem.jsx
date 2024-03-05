import {useEffect, useState} from 'react'
import * as WoWAPI from '../utilities/WoWAPI'
import * as ItemLayout from '../utilities/ItemLayout'

export default function GearItem( {item, slot, orientation, region, gameVersion} ) {
    const [gearIcon, setGearIcon] = useState()
    

    useEffect(() => {
        async function getData() {
            const gearIconData = await WoWAPI.fetchGearIcon(item.id, region, gameVersion)
            setGearIcon(gearIconData)
        }
        item?.id && getData()
    },[])

    return (
        <div className={`item-cont ${orientation} ${slot.toLowerCase()}-slot`}>
            {gearIcon && gearIcon.assets ?
                ItemLayout.createLayout(item, gearIcon.assets[0].value, orientation, gameVersion)
            :
            <>
                <img className={`empty-gear-slot`} alt="empty gear slot" src={'/emptyslot.png'}></img>
            </>
            }
        </div>
    )
}