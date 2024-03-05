import {useState, useEffect} from 'react'
import {useLocation } from 'react-router-dom'
import Specializations from '../../components/Specializations'
import Gear from '../../components/Gear'
import CharDisplay from '../../components/CharDisplay'
import Parses from '../../components/Parses'
import Stats from '../../components/Stats'
import Pvp from '../../components/PVP'
import Statistics from '../../components/Statistics'
import * as WoWAPI from '../../utilities/WoWAPI';

export default function CharPage({ gameVersion }) { 
    const location = useLocation()
    const state = location.state
    const [charSummary, setCharSummary] = useState()
    const [curDisplay, setCurDisplay] = useState('summary')

    useEffect(() => {
        async function getData() {
            const charSummaryData = await WoWAPI.fetchCharSummary(state.charName, state.server, state.region, gameVersion)
            setCharSummary(charSummaryData)
        }
        getData()
    },[])

    console.log(charSummary)


    return (
        <div className="char-data-cont">
                <div className="char-toggle-cont"> 
                    <button className={`char-toggle-button ${curDisplay === 'summary' ? 'selected' : ''}`} onClick={() => setCurDisplay('summary')}>Summary</button>
                    <button className={`char-toggle-button ${curDisplay === 'spec' ? 'selected' : ''}`} onClick={() => setCurDisplay('spec')}>Specialization</button>
                    <button className={`char-toggle-button ${curDisplay === 'pvp' ? 'selected' : ''}`} onClick={() => setCurDisplay('pvp')}>PVP</button>
                    <button className={`char-toggle-button ${curDisplay === 'parse' ? 'selected' : ''}`} onClick={() => setCurDisplay('parse')}>Parses</button>
                    <button className={`char-toggle-button ${curDisplay === 'stats' ? 'selected' : ''}`} onClick={() => setCurDisplay('stats')}>Statistics</button>
                </div>
                <CharDisplay charDetails={state} charSummary={charSummary} gameVersion={gameVersion}/>
                {curDisplay === 'summary' ?
                <>
                    <Gear charDetails={state} gameVersion={gameVersion}/>
                    {gameVersion === 'wrath' ? 
                    <Stats charDetails={state}/>
                    :
                    <></>
                    }
                </>
                :
                gameVersion === 'wrath' && curDisplay === 'spec' ?
                    <Specializations charDetails={state} />
                :
                gameVersion === 'wrath' && curDisplay === 'parse' ?
                    <Parses charDetails={state}/>
                :
                gameVersion === 'wrath' && curDisplay === 'pvp' ? 
                    <Pvp charDetails={state} />
                :
                gameVersion === 'wrath' && curDisplay === 'stats' ? 
                    <Statistics charDetails={state} />
                :
                ''
                }
        </div>
    )
}