import { useState, useEffect } from 'react'
import * as WoWAPI from '../utilities/WoWAPI'

export default function Statistics({charDetails}) {
    const [charStats, setCharStats] = useState({})
    const [visibleStats, setVisibleStats] = useState('')
    const [visibleSubcat, setVisibleSubcat] = useState('') 

    useEffect(() => {
        async function getData() {
            const statData = await WoWAPI.fetchCharStatistics(charDetails.charName, charDetails.server, charDetails.region)
            setCharStats(statData)
        }
        getData()
    },[])


    return (
        <div className='full-statistics-cont flex-col'>
            {charStats?.categories && charStats.categories.map(category =>
            <>
                <button onClick={() => setVisibleSubcat(category.name === visibleSubcat ? '' : category.name)} className="statistics-cont">{category.name}</button>
                {category.sub_categories && visibleSubcat === category.name && category.sub_categories.map(subcat => 
                <>
                    <button onClick={() => setVisibleStats(subcat.name === visibleStats ? '' : subcat.name)}>{subcat.name}</button>
                    <>
                    {subcat.statistics && visibleStats === subcat.name && subcat.statistics.map(substat => 
                        <div>{substat.name} - {substat.quantity}</div>
                    )}
                    </>
                </>
                )}
            </>
            )}
        </div>
    )
}