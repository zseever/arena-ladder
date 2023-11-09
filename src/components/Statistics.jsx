import { useState, useEffect } from 'react'
import * as WoWAPI from '../utilities/WoWAPI'

export default function Statistics({charDetails}) {
    const [charStats, setCharStats] = useState({})

    useEffect(() => {
        async function getData() {
            const statData = await WoWAPI.fetchCharStatistics(charDetails.charName, charDetails.server, charDetails.region)
            console.log(statData)
            setCharStats(statData)
        }
        getData()
    },[])

    return (
        <div className='full-statistics-cont flex-col'>
            {charStats?.categories && charStats.categories.map(category =>
            <>
                <div className="statistics-cont flex flex-col">{category.name}</div>
                {category.sub_categories && category.sub_categories.map(subcat => 
                <>
                    <div>{subcat.name}</div>
                    {subcat.statistics && subcat.statistics.map(substat => 
                        <div>{substat.name} - {substat.quantity}</div>
                    )}
                </>
                )}
            </>
            )}
        </div>
    )
}