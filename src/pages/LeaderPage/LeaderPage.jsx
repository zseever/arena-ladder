import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as WoWAPI from '../../utilities/WoWAPI.js'


export default function LeaderPage() {
    const [data, setData] = useState([])
    const [bracket, setBracket] = useState('2v2')
    const [region, setRegion] = useState('1')
  
    useEffect(() => {
        async function getData() {
            const leaderData = await WoWAPI.fetchData(bracket, region)
            setData(leaderData)
        }
        getData()
    }, [bracket, region])

    console.log(data)

    return (
        <>
            <h1>{ region === '1' ? 'NA' : 'EU'} { bracket } Ladder</h1>
            <div className="button-bar">
                <button onClick={() => setBracket('2v2')}>2v2</button>
                <button onClick={() => setBracket('3v3')}>3v3</button>
                {/* <button onClick={() => setBracket('5v5')}>5v5</button> */}
                <button onClick={() => setRegion('1')}>NA</button>
                <button onClick={() => setRegion('0')}>EU</button>
            </div>
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
                { data.length && data.slice(0,50).map((char,idx) => 
                    <tr className={idx % 2 === 0 ? 'even-row' : 'odd-row'} key={char.character.name}>
                        {/* <td><Link to='/character' className='char-link' state={{ charName: char.character.name, server: char.character.realm.slug, region: region}}>{char.character.name}</Link></td> */}
                        <td><Link to='/character' className='char-link' state={{ charName: 'Revolol', server: 'benediction', region: region}}>{char.character.name}</Link></td>
                        <td>{char.character.realm.slug[0].toUpperCase() + char.character.realm.slug.slice(1).toLowerCase()}</td>
                        <td>{char.faction.type[0].toUpperCase() + char.faction.type.slice(1).toLowerCase()}</td>
                        <td>{char.rank}</td>
                        <td>{char.rating}</td>
                        <td>{char.season_match_statistics.won}</td>
                        <td>{char.season_match_statistics.lost}</td>
                        <td>{char.season_match_statistics.played}</td>
                        <td>{((char.season_match_statistics.won / char.season_match_statistics.played)*100).toFixed(1)} % </td>
                    </tr>
                    ) 
                }
                </tbody>
            </table>
        </>
    )
}