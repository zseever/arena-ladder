import * as LogsAPI from '../utilities/LogsAPI'
import { useState, useEffect } from 'react'

export default function Parses({ charDetails }) {
    const [parseData, setParseData] = useState()

    useEffect(() => {
        async function getData() {
            const parses = await LogsAPI.fetchLogs(charDetails.charName, charDetails.server, charDetails.region)
            setParseData(parses)
        }
        getData()
    },[])


    return (
        <div>
             <table className="parse-table">
                <thead>
                <tr>
                    <th>Boss Name</th>
                    <th>Spec</th>
                    <th>DPS</th>
                    <th>Parse</th>
                    <th>Difficulty</th>
                    <th>Report</th>
                </tr>
                </thead>
                <tbody>
                {parseData && parseData.map((parse,idx) => 
                    <tr className={idx % 2 === 0 ? 'even-row':'odd-row'} key={parse.bossName}>
                        <td className="boss-name-col">{parse.bossName}</td>
                        <td >{parse.spec}</td>
                        <td>{parse.dps.toFixed(0).toLocaleString('en-US')}</td>
                        <td style={{color: parse.percentile >= 99 ? 'rgb(239, 66, 245)' : parse.percentile >= 95 ? 'orange' : 'rgb(154, 17, 189)' }}>{parse.percentile.toFixed(1)}%</td>
                        <td>{parse.difficulty === 4 ? 'Heroic' : 'Normal'}</td>
                        <td><a href={`https://classic.warcraftlogs.com/reports/${parse.report}`}>Link</a></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}