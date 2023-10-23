import { useEffect, useState } from "react"
import * as WoWAPI from '../utilities/WoWAPI'

export default function Avatar( props ) {
    const charDetails = props.charData
    const [charData, setCharData] = useState()

    useEffect(() => {
        async function getData() {
            const avatarData = await WoWAPI.fetchAvatar(charDetails.charName, charDetails.server, charDetails.region)
            setCharData(avatarData)
        }
        getData()
    },[])

    return (
        <div>
            {!charData ? '' : !charData.assets ? '' :<img src={charData.assets[0].value}></img>}       
        </div>
    )
}