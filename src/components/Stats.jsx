import { useState, useEffect } from 'react';
import * as WoWAPI from '../utilities/WoWAPI'

export default function Stats({ charDetails }) {
    const [stats, setStats] = useState()
    
    useEffect(() => {
        async function getData() {
            const statsData = await WoWAPI.fetchCharStats(charDetails.charName, charDetails.server, charDetails.region)
            setStats(statsData)
        }
        getData()
    },[])

    return (
        <div className="stats-container flex-row space-btwn">
            {stats && 
            <>
            <div className="stat-container flex-col">
                <div className="bold-title">Base Stats</div>
                <div>Health: {stats.health}</div>
                <div>Srength: {stats.strength.effective}</div>
                <div>Agility: {stats.agility.effective}</div>
                <div>Stamina: {stats.stamina.effective}</div>
                <div>Intellect: {stats.intellect.effective}</div>
                <div>Spirit: {stats.spirit.effective}</div>
                <div>Armor: {stats.armor.effective}</div>
            </div>
            <div className="stat-container flex-col">
                <div className="bold-title">Melee</div>
                <div>Speed: {stats.main_hand_speed ? stats.main_hand_speed.toFixed(2) : '0'} {stats.off_hand_speed ? `/ ${stats.off_hand_speed.toFixed(2)}` : ''}</div>
                <div>Melee Haste: {stats.melee_haste.value.toFixed(1)}%</div>
                <div>Attack Power: {stats.attack_power}</div>
                <div>Crit Chance: {stats.melee_crit.value.toFixed(1)}%</div>
            </div>
            <div className="stat-container flex-col"> 
                <div className="bold-title">Ranged</div>
                <div>Speed: {stats.main_hand_speed ? stats.main_hand_speed.toFixed(2) : '0'} {stats.off_hand_speed ? `/ ${stats.off_hand_speed.toFixed(2)}` : ''}</div>
                <div>Ranged Haste: {stats.ranged_haste.value.toFixed(1)}%</div>
                <div>Attack Power: {stats.attack_power}</div>
                <div>Crit Chance: {stats.ranged_crit.value.toFixed(1)}%</div>
            </div>
            <div className="stat-container flex-col">
                <div className="bold-title">Spell</div>
                <div>Spell Power: {stats.spell_power}</div>
                <div>Spell Haste: {stats.spell_haste.value.toFixed(1)}%</div>
                <div>Spell Crit: {stats.spell_crit.value.toFixed(1)}%</div>
                <div>Penetration: {stats.spell_penetration}</div>
                <div>Mana Regen: {stats.mana_regen}</div>
            </div>
            <div className="stat-container flex-col">
                <div className="bold-title">Defense</div>
                <div>Armor: {stats.armor.effective}</div>
                <div>Defense: {stats.defense.effective}</div>
                <div>Dodge: {stats.dodge.value.toFixed(1)}%</div>
                <div>Parry: {stats.parry.value.toFixed(1)}%</div>
                <div>Block: {stats.block.value.toFixed(1)}%</div>
            </div>
            </>
            }
        </div>
    )
}