import {useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function CharPage() { 
    const [charData, setCharData] = useState()
    const xData = useLocation()

    useEffect(function() {
        async function fetchSpec(charname, server, rgn) {
            const url = `https://${ rgn === '1' ? 'us' : 'eu'}.api.blizzard.com/profile/wow/character/${server}/${charname.toLowerCase()}/specializations?namespace=profile-classic-${ rgn === '1' ? 'us' : 'eu'}&locale=en_US&access_token=USCY1VU77hm4d737wH7EJsrBGua47n5nHm`
            const charResults = await fetch(url)
            const jsonData = await charResults.json()
            setCharData(jsonData)
        }
        fetchSpec(xData.state.name, xData.state.server, xData.state.region)
        console.log(charData)
    },[])

    return (
        <div>
            {charData ? 
            <>
                <div>{charData.character.name}</div>
                <br></br>
                {/* <div>Glyphs</div>
                {charData.specialization_groups[0].glyphs.map((glyph,idx) => <div>{glyph.name}</div>)} */}
                <br></br>
                <div>Specialization</div>

                {charData.specialization_groups.map((specs,idx) => 
                    <div>
                        <div>Spec #{idx+1}</div>
                        {specs.specializations.map((talentTree,idx) => 
                        <div>
                            <div>Talent Path: {talentTree.specialization_name} ({talentTree.spent_points})</div>
                            {talentTree.talents.map((talent,idx) => 
                            <div>{talent.spell_tooltip.spell.name}({talent.talent_rank})</div>
                            )}
                            <br></br>
                        </div>
                        )}
                        <br></br>
                    </div>
                )}
            </>
            : <>hi</>
            }
        </div>
    )
}