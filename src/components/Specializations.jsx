import { useState, useEffect } from "react"
import * as WoWAPI from '../utilities/WoWAPI'

export default function Specializations( props ) {
    const apiKey = props.apiKey
    const charDetails = props.charData
    const [charData, setCharData] = useState()

    useEffect(() => {
        async function getData() {
            const specData = await WoWAPI.fetchSpec(charDetails.charName, charDetails.server, charDetails.region)
            setCharData(specData)
        }
        getData()
    },[])

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