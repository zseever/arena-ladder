import {useEffect, useState} from 'react'
import * as WoWAPI from '../utilities/WoWAPI'
import * as ItemLayout from '../utilities/ItemLayout'

export default function GearItem( {item, slot, orientation, region} ) {
    const [gearIcon, setGearIcon] = useState()
    

    useEffect(() => {
        async function getData() {
            const gearIconData = await WoWAPI.fetchGearIcon(item.id, region)
            setGearIcon(gearIconData)
        }
        item?.id && getData()
    },[])

    return (
        <div className={`item-cont ${orientation} ${slot.toLowerCase()}-slot`}>
            {gearIcon && gearIcon.assets ?
            ItemLayout.createLayout(item, gearIcon.assets[0].value, orientation)
            :
            <>
            <img className={`empty-gear-slot`} src={'/emptyslot.png'}></img>
            </>
            }
        </div>
    )
}