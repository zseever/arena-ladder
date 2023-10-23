import { useState, useEffect } from "react"

export default function Specializations( props ) {
    const apiKey = props.apiKey
    const charDetails = props.charData
    const [charData, setCharData] = useState()

    useEffect(function() {
        async function fetchSpec(charName, server, rgn) {
            const url = `https://${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/profile/wow/character/${server}/${charName.toLowerCase()}/specializations?namespace=profile-classic-${ rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=${apiKey}`
            const charResults = await fetch(url)
            const jsonData = await charResults.json()
            setCharData(jsonData)
        }
        fetchSpec(charDetails.charName, charDetails.server, charDetails.region)
    },[])

    console.log(charData)


    return (
        <>
        <div>Specializations</div>
        <div className="spec-cont">
            {charData && charData.specialization_groups.map((specs,idx) => 
                <div className="spec-glyph-cont">
                    <div key={'spec-'+idx}>
                        <div>Spec #{idx+1}</div>
                            {specs.specializations.map((talentTree,idx) => 
                            <div>
                                <div>Tree: {talentTree.specialization_name} ({talentTree.spent_points})</div>
                                {talentTree.talents.map((talent,idx) => 
                                <div>{talent.spell_tooltip.spell.name}({talent.talent_rank})</div>
                                )}
                                <br></br>
                            </div>
                            )}
                        <br></br>
                    </div>
                    <div>
                        <div>Glyphs</div>
                        {specs.glyphs.map((glyph,idx) => <div>{glyph.name}</div>)}
                    </div>
                </div>
            )}
        </div>
        </>

    )
}