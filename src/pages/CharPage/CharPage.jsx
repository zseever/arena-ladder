import {useLocation } from 'react-router-dom'
import Specializations from '../../components/Specializations'
import Gear from '../../components/Gear'
import Avatar from '../../components/Avatar'

export default function CharPage() { 
    const location = useLocation()
    const state = location.state

    return (
        <div className="char-data-cont">
            <>
                <div>{state.charName}</div>
                <Avatar charData={state}/>
                <Gear charData={state}/>
                <Specializations charData={state} />
            </>
        </div>
    )
}