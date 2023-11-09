import { useState, useEffect } from 'react'
import * as WoWAPI from '../utilities/WoWAPI'

export default function Pvp({charDetails}) {
    const [pvpStats, setPvpStats] = useState([])

    useEffect(() => {
        async function getData() {
            const pvpData = await WoWAPI.fetchPvpStats(charDetails.charName, charDetails.server, charDetails.region)
            console.log(pvpData)
            setPvpStats(pvpData)
        }
        getData()
    },[])

    return (
        <div className='pvp-stats-cont flex'>
            {pvpStats.length && pvpStats.map(bracket =>
                <div className="pvp-stats flex flex-col">
                    <div>{bracket.bracket.type.slice(-3)}</div>
                    <div>{bracket.rating}</div>
                    <div>Season: {bracket.season_match_statistics.won} - {bracket.season_match_statistics.lost}</div>
                    <div>Weekly: {bracket.weekly_match_statistics.won} - {bracket.weekly_match_statistics.lost}</div>
                </div>
            )}
        </div>
    )
}