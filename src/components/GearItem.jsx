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


    return (
        <div className={"item-cont "+orientation}>
            {gearIcon && gearIcon.assets &&
                <>
                {orientation === 'right' ? 
                <>
                    <div className={`${item.quality.toLowerCase()}`}>{item.name}</div>   
                    <div className={`${item.quality.toLowerCase()} item-icon`}>
                        <img src={gearIcon.assets[0].value}></img>
                    </div>  
                </>
                :
                <>
                    <div className={`${item.quality.toLowerCase()} item-icon`}>
                        <img src={gearIcon.assets[0].value}></img>
                    </div>  
                    <div className={`${item.quality.toLowerCase()}`}>{item.name}</div>   
                </>
                }
                </>
            }
        </div>
    )
}