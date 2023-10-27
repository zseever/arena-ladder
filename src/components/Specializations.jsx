import { useState, useEffect } from "react"
import * as WoWAPI from '../utilities/WoWAPI'
import TalentTrees from "./TalentTrees/TalentTrees"
import Glyphs from "./Glyphs/Glyphs"

export default function Specializations( props ) {
    const charDetails = props.charData
    const [charData, setCharData] = useState()
    const [specSelect, setSpecSelect] = useState(true)

    useEffect(() => {
        async function getData() {
            const specData = await WoWAPI.fetchSpec(charDetails.charName, charDetails.server, charDetails.region)
            setCharData(specData)
        }
        getData()
    },[])

    function toggleSpecSelect() {
        let visibleSpec = !specSelect
        setSpecSelect(visibleSpec)
    }

    return (
        <div className="full-talent-cont">
            <div>Talents</div>
            <div className="spec-display-toggle-cont">
                <div>{specSelect === true ? 'Primary Spec' : 'Alternate Spec'}</div>
                <button className='spec-button' onClick={() => toggleSpecSelect()}>{specSelect === true ? 'Show Alternate Spec' : 'Show Primary Spec'}</button>
            </div>
            <div className="spec-cont">
                {charData && charData.specialization_groups.map((specs,idx) => 
                    <>
                    {specs.is_active === specSelect ? 
                        <div className={"spec-glyph-cont "+specs.is_active === specSelect ? 'active-spec' : 'inactive-spec'}>
                            <TalentTrees talents={specs.specializations} />
                            <Glyphs glyphs={specs.glyphs}/>
                        </div>
                        :
                        ''
                    }

                    </>

                )}
            </div>
        </div>

    )
}