export default function Talent({ talentName, ranks, maxRanks, imgName, playableClass, spec }) {
    const fullImgPath = `/talent-icons/${playableClass}/${spec}/${imgName}`

    return (
        <div className={`talent-icon ${ranks ? 'active-talent' : 'inactive-talent'}`} style={{backgroundImage: `url(${fullImgPath})` }}>
            <div className="talent-ranks-box">
                <span>{ranks ?? 0}</span>/{maxRanks}
            </div>
        </div>
    )
}