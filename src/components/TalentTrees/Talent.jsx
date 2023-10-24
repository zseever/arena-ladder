export default function Talent({ talentName, ranks, maxRanks, imgPath, playableClass, spec }) {
    const fullImgPath = `/talent-icons/${playableClass}/${spec}/${imgPath}`

    return (
        <div className="talent-icon" style={{backgroundImage: `url(${fullImgPath})` }}>
            <div className="talent-ranks-box">
                <span>{ranks ?? 0}</span>/{maxRanks}
            </div>
        </div>
    )
}