import ArmsTree from "./Warrior/Arms/ArmsTree"

export default function TalentTrees( ) {
    // const charClass = props.charClass
    // const talents = props.talents
    const charClass = 'warlock'


    return (
        <div>
            {charClass === 'warrior' ? 
            <>
            <ArmsTree />
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