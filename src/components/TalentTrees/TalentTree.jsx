import { useState, useEffect } from 'react';
import { AllTalents } from '../../utilities/AllTalents';
import Talent from './Talent';

export default function TalentTree( props ) {
    const talents = props.talents
    const spec = props.spec
    const points = props.points
    const [talentData, setTalentData] = useState({})
    const rows = [1,2,3,4,5,6,7,8,9,10,11]
    const fullTalentList = AllTalents['warrior'][spec]

    function assignTalentData(talents) {
        let tempTalentData = {}
        if (talents)  {
            talents.forEach((talent) => {
                let talentName = talent.spell_tooltip.spell.name
                tempTalentData[talentName] = talent.talent_rank.toString()
            })
        }
        setTalentData(tempTalentData)
    }

    useEffect(() => {
        assignTalentData(talents)
    },[])


    return (
        <div className="spec-container">
            <div>{spec.toUpperCase()} ( {points ?? 0} )</div>
        {rows.map((row) => 
            <div className={`talent-row`}>
                {fullTalentList.map((talent,idx) => 
                <>
                    {talent.row === row ? <Talent talentName={talent.talentName} ranks={talentData[talent.talentName]} maxRanks={talent.maxRanks} imgName={talent.imgName} playableClass='warrior' spec={spec} /> : ''}
                </>
                )}
            </div>
        )}
        </div>
    )
}