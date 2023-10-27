import TalentTree from "./TalentTree"
import { AllTalents } from "../../utilities/AllTalents"

export default function TalentTrees( props ) {
    // const charClass = props.charClass
    const playerTalentTrees = props.talents
    const charClass = 'warrior'
    const classSpecList = AllTalents[charClass].specializations
    const playerTalents = transformTalents(playerTalentTrees)

    function transformTalents(talents) {
        const talentsLookup = {}
        playerTalentTrees.forEach(playerTalentTree => {
            let specName = playerTalentTree.specialization_name.toLowerCase()
            talentsLookup[specName] = playerTalentTree.talents
            talentsLookup[specName+'-points'] = playerTalentTree.spent_points
        })
        return talentsLookup
    }


    return (
        <div className="talent-tree-container">
            {classSpecList.map(spec =>
                <TalentTree talents={playerTalents[spec] ?? []} spec={spec} points={playerTalents[spec+'-points']} />
            )}
        </div>
    )
}