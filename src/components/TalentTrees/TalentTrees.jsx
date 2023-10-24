import FuryTree from "./Warrior/Fury/FuryTree"

export default function TalentTrees( props ) {
    // const charClass = props.charClass
    const talents = props.talents
    const charClass = 'warrior'


    return (
        <div>
            {charClass === 'warrior' ? 
            <>
            <FuryTree talents={talents}/>
            </>
            : charClass === 'druid' ?
            'Druid'
            : charClass === 'warlock' ?
            'Warlock'
            :
            'Nothing'
            }
        </div>
    )
}