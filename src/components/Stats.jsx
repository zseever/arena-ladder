import { useState, useEffect } from 'react';
import * as WoWAPI from '../utilities/WoWAPI'

export default function Stats({ charDetails }) {
    const [stats, setStats] = useState()
    
    useEffect(() => {
        async function getData() {
            const statsData = await WoWAPI.fetchCharStats(charDetails.charName, charDetails.server, charDetails.region)
            setStats(statsData)
            console.log(statsData)
        }
        getData()
    },[])

    return (
        <div className="stats-container flex-row space-btwn">
            {stats && 
            <>
                <div>Health: {stats.health}</div>
                <div>Attack Power: {stats.attack_power}</div>
                <div>Armor: {stats.armor.effective}</div>
                <div>Crit: {stats.melee_crit.value.toFixed(1)}%</div>
            </>
            }
        </div>
    )
}