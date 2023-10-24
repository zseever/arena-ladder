import { useState, useEffect } from 'react';
import { FuryTalents } from '../../../../utilities/FuryTalents';
import Talent from '../../Talent';

export default function FuryTree( props ) {
    const talents = props.talents
    const [talentData, setTalentData] = useState({})
    const rows = [1,2,3,4,5,6,7,8,9,10,11]

    function assignTalentData(talents) {
        let tempTalentData = {}
        talents.talents.forEach((talent) => {
            let talentName = talent.spell_tooltip.spell.name
            tempTalentData = {...tempTalentData,
                [talentName]: talent.talent_rank.toString()}
            })
            setTalentData(tempTalentData)
    }

    useEffect(() => {
        assignTalentData(talents)
        console.log(talentData)
    },[])


    return (
        <>
        {rows.map((row) => 
            <div className={`talent-row war-fury-talent-${row}`}>
                {FuryTalents.map(talent => 
                <>
                    {talent.row === row ? <Talent talentName={talent.talentName} ranks={talentData[talent.talentName]} maxRanks={talent.maxRanks} imgPath={talent.imgPath} playableClass='warrior' spec='fury' /> : ''}
                </>
                )}
            </div>
        )}
        </>
    )
}