import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const [serverInp, setServerInp] = useState()
    const [charInp, setCharInp] = useState()
    const [regionInp, setRegionInp] = useState('1')
    const [trigger, setTrigger] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (trigger) {
            navigate('/character', {state:{charName: charInp, server: serverInp, region: regionInp}})
        }
    },[trigger])

    
    return (
        <>
        <div>
            <div>Search for a character:</div>
            <div className="flex-row space-btwn search-cont">
                <label for="char-name">Character:</label>
                <input onChange={(e) => setCharInp(e.target.value)} id="char-name" type="text" ></input>
            </div>
            <div className="flex-row space-btwn search-cont"> 
                <label for="server-name">Server:</label>
                <input onChange={(e) => setServerInp(e.target.value.toLowerCase())} id="server-name" type="text" ></input>
            </div>
            <div className="flex-row space-btwn search-cont">
                <label for="region-name">Region:</label>
                <select className="region-select" onChange={(e) => setRegionInp(e.target.value.toString())} id="region-name">
                    <option value="1">US</option>
                    <option value="0">EU</option>
                </select>
            </div>
            <button className="search-button" onClick={() => setTrigger(!trigger)} type="submit">Search</button>
        </div>
        <div>
            Insert WoW Token Price Here
            {/* https://us.api.blizzard.com/data/wow/token/index?namespace=dynamic-classic-us&locale=en_US&access_token=USQlZykdBAXmLn052chcyCulGDw4gKF4ix */}
            WoWHead Blue Tracker rss feed
            {/* https://www.wowhead.com/wotlk/blue-tracker?rss */}
        </div>
        </>
    )
}
