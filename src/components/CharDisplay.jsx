import { useEffect, useState } from "react"
import * as WoWAPI from '../utilities/WoWAPI'

export default function CharDisplay( { charDetails, charSummary} ) {
    let title = charSummary?.active_title?.name ? charSummary.active_title.name : '%s'
    const titleDetails = charSummary && createNameTitle(title, charDetails.charName)
    const [charData, setCharData] = useState()
    const [loginDate, setLoginDate] = useState()

    useEffect(() => {
        async function getData() {
            const avatarData = await WoWAPI.fetchAvatar(charDetails.charName, charDetails.server.toLowerCase(), charDetails.region)
            setCharData(avatarData)
        }
        getData()

    },[])

    useEffect(() => {
        if (charSummary?.last_login_timestamp) {
            let lastLogin = new Date(charSummary.last_login_timestamp)
            lastLogin = lastLogin.getMonth() + 1 + '-' + lastLogin.getDate() + '-' + lastLogin.getFullYear()
            setLoginDate(lastLogin)
        }
    },[charSummary])

    function createNameTitle(title, charName) {
        let result = {}
        const titleArr = title.split(' ')
        for (let i=0; i<= titleArr.length; i++) {
            if (titleArr[i] === '%s') {
                titleArr[i] = charName
                if (i === 0) {
                    result['first'] = 'name'
                } else {
                    result['first'] = 'title'
                }
                titleArr.splice(i,1)
            }
        }
        result['title'] = titleArr.join(' ')
        return result
    }

    return (
        <div className="flex full-char-details-cont">
            <div className="char-details-cont">
                {charSummary?.faction && charSummary.faction.type === 'ALLIANCE' ?
                    <img src={'/alliancelogo.png'} className="alliance-logo"></img>
                    :
                    <img src={'/hordelogo.png'} className="horde-logo"></img>
                }
                {titleDetails && titleDetails.first === 'name' && 
                    <>
                    <div>
                        <div className="char-name">{charDetails.charName}</div> 
                        <div className="char-title">{titleDetails.title}</div> 
                        <div className="guild-name">{`< ${charSummary.hasOwnProperty('guild') ? charSummary.guild.name : ''} >`}</div>
                    </div>
                    </>
                }   
                {titleDetails && titleDetails.first === 'title' && 
                    <div>
                        <div className="char-title">{titleDetails.title}</div> 
                        <div className="char-name">{charDetails.charName}</div> 
                        <div className="guild-name">{`< ${charSummary.hasOwnProperty('guild') ? charSummary.guild.name : ''} >`}</div>
                    </div>
                }                 
            </div>
            <div className="vert-col"></div>
            {charSummary ? 
                <div className="char-details-display">
                    <div>Level {charSummary.level} {charSummary.race.name} {charSummary.character_class.name} - {charSummary.realm.name}</div>
                    <div>Item Level: {charSummary.equipped_item_level}</div>
                    <div>Achievement Points: {charSummary.achievement_points}</div>
                    <div>Last Logged in: {loginDate}</div>
                </div>
                :
                <div></div>
            }
            <div className="vert-col"></div>
            {!charData ? '' : !charData.assets ? '' :<img className="ava-test" src={charData.assets[0].value}></img>}       
        </div>
    )
}