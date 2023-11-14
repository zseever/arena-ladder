
export default function Talent({ talentName, ranks, maxRanks, imgName, playableClass, spec, mainId, defId }) {
    const fullImgPath = `/talent-icons/${playableClass}/${spec}/${imgName}`

    return (
        <a className="talent-wowhead-link" href={`https://www.wowhead.com/wotlk/spell=${mainId ? mainId : defId ? defId : ``}/`}>
            <div className={`talent-icon ${ranks ? 'active-talent' : 'inactive-talent'}`} style={{backgroundImage: `url(${fullImgPath})` }}>
                <div className="talent-ranks-box">
                    <span>{ranks ?? 0}</span>/{maxRanks}
                </div>
            </div>
        </a>
    )
}