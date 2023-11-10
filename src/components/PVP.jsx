import { useState, useEffect } from 'react'
import * as WoWAPI from '../utilities/WoWAPI'

export default function Pvp({charDetails}) {
    const [pvpStats, setPvpStats] = useState([])

    useEffect(() => {
        async function getData() {
            const pvpData = await WoWAPI.fetchPvpStats(charDetails.charName, charDetails.server, charDetails.region)
            setPvpStats(pvpData)
        }
        getData()
    },[])

    return (
        <div className='pvp-stats-cont flex'>
            {pvpStats.length && pvpStats.map(bracket =>
            <>
                {bracket?.bracket &&
                <div className="pvp-stats flex flex-col">
                    <div className="bracket-name-text">{bracket.bracket.type.slice(-3)}</div>
                    <div className="rating-text">{bracket.rating}</div>
                    <div>
                        <div>Season Record: </div>
                        <div><span className="win-text">{bracket.season_match_statistics.won}</span> - <span className="loss-text">{bracket.season_match_statistics.lost}</span></div>
                    </div>
                    <div className='weekly-record-cont'> 
                        <div>Weekly Record:</div>
                        <div><span className="win-text">{bracket.weekly_match_statistics.won}</span> - <span className="loss-text">{bracket.weekly_match_statistics.lost}</span></div>
                    </div>
                </div>
                }
            </>
            )}
        </div>
    )
}