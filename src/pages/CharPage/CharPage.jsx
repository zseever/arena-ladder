import {useState, useEffect} from 'react'
import {useLocation } from 'react-router-dom'
import Specializations from '../../components/Specializations'
import Gear from '../../components/Gear'
import CharDisplay from '../../components/CharDisplay'
import Parses from '../../components/Parses'
import Stats from '../../components/Stats'
import * as WoWAPI from '../../utilities/WoWAPI';

export default function CharPage() { 
    const location = useLocation()
    const state = location.state
    const [charSummary, setCharSummary] = useState()

    useEffect(() => {
        async function getData() {
            const charSummaryData = await WoWAPI.fetchCharSummary(state.charName, state.server, state.region)
            setCharSummary(charSummaryData)
        }
        getData()
    },[])

    return (
        <div className="char-data-cont">
            <>
                <CharDisplay charDetails={state} charSummary={charSummary}/>
                <Gear charDetails={state}/>
                <Stats charDetails={state}/>
                <Specializations charDetails={state} />
                <Parses charDetails={state }/>
            </>
        </div>
    )
}