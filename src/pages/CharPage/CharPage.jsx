import {useLocation } from 'react-router-dom'
import Specializations from '../../components/Specializations'
import Gear from '../../components/Gear'
import Avatar from '../../components/Avatar'
import TalentTrees from '../../components/TalentTrees/TalentTrees'

export default function CharPage( props ) { 
    const apiKey = props.apiKey
    const xData = useLocation()

    return (
        <div className="char-data-cont">
            {xData ? 
            <>
                <div>{xData.state.name}</div>
                <Avatar apiKey={apiKey} charData={{charName: xData.state.name, server: xData.state.server, region: xData.state.region}}/>
                <Gear apiKey={apiKey} charData={{charName: xData.state.name, server: xData.state.server, region: xData.state.region}}/>
                <Specializations apiKey={apiKey} charData={{charName: xData.state.name, server: xData.state.server, region: xData.state.region}} />
            </>
            : <></>
            }
        </div>
    )
}