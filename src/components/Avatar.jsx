import { useEffect, useState } from "react"

export default function Avatar( props ) {
    const apiKey = props.apiKey
    const charDetails = props.charData
    const [charData, setCharData] = useState()

    useEffect(function() {
        async function fetchAvatar(charName, server, rgn) {
            const url = `https://${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/profile/wow/character/${server}/${charName.toLowerCase()}/character-media?namespace=profile-classic-${ rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=${apiKey}`
            const charResults = await fetch(url)
            const jsonData = await charResults.json()
            if (jsonData) {
                setCharData(jsonData)
            }
        }
        fetchAvatar(charDetails.charName, charDetails.server, charDetails.region)
        console.log(charData)
    },[])

    return (
        <div>
        {!charData ? '' : !charData.assets ? '' :<img src={charData.assets[0].value}></img>}       
        </div>
    )
}