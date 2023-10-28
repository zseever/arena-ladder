import {useEffect, useState} from 'react'
import * as WoWAPI from '../utilities/WoWAPI'

export default function GearItem( props ) {
    const item = props.item
    const orientation = props.orientation
    const region = props.region
    const [gearIcon, setGearIcon] = useState()

    useEffect(() => {
        async function getData() {
            const gearIconData = await WoWAPI.fetchGearIcon(item.id, region)
            setGearIcon(gearIconData)
        }
        getData()
    },[])

    function createLayout(item, icon, orientation) {
        if (item) {
            if (orientation === 'right' || item.slot === 'MAIN_HAND' || item.slot === 'RANGED') {
                return (
                    <>
                        <div className={`${item.quality.toLowerCase()}`}>{item.name}</div>   
                        <div className={`${item.quality.toLowerCase()} item-icon`}>
                            <img src={icon}></img>
                        </div>  
                    </>
                )
            } else if (orientation === 'left' || item.slot === 'OFF_HAND') {
                return (
                    <>
                        <div className={`${item.quality.toLowerCase()} item-icon`}>
                            <img src={icon}></img>
                        </div>  
                        <div className={`${item.quality.toLowerCase()}`}>{item.name}</div>   
                    </>
                )
            }
        }
    }


    return (
        <div className={`item-cont ${orientation} ${item ? item.slot.toLowerCase() : 'undefined'}-slot`}>
            {gearIcon && gearIcon.assets && createLayout(item, gearIcon.assets[0].value, orientation)}
        </div>
    )
}