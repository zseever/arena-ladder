import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as WoWAPI from '../../utilities/WoWAPI.js'

export default function LeaderPage() {
    const [data, setData] = useState([])
    const [bracket, setBracket] = useState('2v2')
    const [region, setRegion] = useState('1')
    const [curView, setCurView] = useState([0,50])
  
    useEffect(() => {
        async function getData() {
            const leaderData = await WoWAPI.fetchData(bracket, region)
            setData(leaderData.entries)
        }
        getData()
    }, [bracket, region])

    return (
        <>
            <h1>Player vs Player Leaderboards</h1>
            <div className="button-bar">
                <button className={bracket === '2v2' ? 'selected' : ''} onClick={() => setBracket('2v2')}>2v2</button>
                <button className={bracket === '3v3' ? 'selected' : ''} onClick={() => setBracket('3v3')}>3v3</button>
                {/* <button onClick={() => setBracket('5v5')}>5v5</button> */}
                <button className={region === '1' ? 'selected' : ''} onClick={() => setRegion('1')}>NA</button>
                <button className={region === '0' ? 'selected' : ''} onClick={() => setRegion('0')}>EU</button>
            </div>
            <div>
                <button onClick={() => setCurView([curView[0]-50,curView[1]-50])}>&lt;-</button>
                <button onClick={() => setCurView([curView[0]+50,curView[1]+50])}>-&gt;</button>
            </div>
            {data.length && 
            <table className="ranking-table">
                <thead>
                <tr>
                    <th>Character</th>
                    <th>Realm</th>
                    <th>Faction</th>
                    <th>Rank</th>
                    <th>Rating</th>
                    <th>Win</th>
                    <th>Loss</th>
                    <th>Played</th>
                    <th>Win %</th>
                </tr>
                </thead>
                <tbody>
                {data.slice(curView[0], curView[1]).map((char,idx) => 
                    <tr className={idx % 2 === 0 ? 'even-row':'odd-row'} key={char.character.name+'-'+char.character.realm.slug}>
                        <td><Link to='/character' className='char-link' state={{ charName: char.character.name, server: char.character.realm.slug, region: region, faction: char.faction.type}}>{char.character.name}</Link></td>
                        {/* <td><Link to='/character' className='char-link' state={{ charName: 'Revolol', server: char.character.realm.slug, region: region, faction: char.faction.type}}>{char.character.name}</Link></td> */}
                        <td>{char.character.realm.slug[0].toUpperCase()+char.character.realm.slug.slice(1).toLowerCase()}</td>
                        {/* <td>{char.faction.type[0].toUpperCase()+char.faction.type.slice(1).toLowerCase()}</td> */}
                        <td>{char.faction.type === 'ALLIANCE' ? <img src={'/alliancelogo.png'} className="alliance-logo logo-small"></img> : <img src={'/hordelogo.png'} className="horde-logo logo-small"></img> }</td>
                        <td>{char.rank}</td>
                        <td>{char.rating}</td>
                        <td>{char.season_match_statistics.won}</td>
                        <td>{char.season_match_statistics.lost}</td>
                        <td>{char.season_match_statistics.played}</td>
                        <td>{((char.season_match_statistics.won / char.season_match_statistics.played)*100).toFixed(1)} %</td>
                    </tr>
                    )}
                </tbody>
            </table>
            }
        </>
    )
}