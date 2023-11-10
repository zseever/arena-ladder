import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import * as WoWAPI from '../../utilities/WoWAPI'

export default function HomePage() {
    const [serverInp, setServerInp] = useState()
    const [charInp, setCharInp] = useState()
    const [regionInp, setRegionInp] = useState('1')
    const [tokenPrices, setTokenPrices] = useState()
    const [trigger, setTrigger] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (trigger) {
            navigate('/character', {state:{charName: charInp, server: serverInp, region: regionInp}})
        }
    },[trigger])

    useEffect(() => {
        async function getData() {
            let tokens = await WoWAPI.fetchTokenPrice()
            setTokenPrices(tokens)
        }
        getData()
    },[])

    
    return (
        <>
        <div>
            <div>Search for a character:</div>
            <div className="flex-row space-btwn search-cont">
                <label htmlFor="char-name">Character:</label>
                <input onChange={(e) => setCharInp(e.target.value)} id="char-name" type="text" ></input>
            </div>
            <div className="flex-row space-btwn search-cont"> 
                <label htmlFor="server-name">Server:</label>
                <input onChange={(e) => setServerInp(e.target.value.toLowerCase())} id="server-name" type="text" ></input>
            </div>
            <div className="flex-row space-btwn search-cont">
                <label htmlFor="region-name">Region:</label>
                <select className="region-select" onChange={(e) => setRegionInp(e.target.value.toString())} id="region-name">
                    <option value="1">US</option>
                    <option value="0">EU</option>
                </select>
            </div>
            <button className="search-button" onClick={() => setTrigger(!trigger)} type="submit">Search</button>
        </div>
        <div>
            <div>WoW Token Prices</div>
            {tokenPrices && 
            <>
            <div>US: {tokenPrices[0].price.toString().slice(0,4)}g</div>
            <div>EU: {tokenPrices[1].price.toString().slice(0,4)}g</div>
            </>
            }
        </div>
        </>
    )
}
