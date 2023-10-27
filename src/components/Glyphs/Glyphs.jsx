import majorGlyphImg from './majorglyph.jpg'

export default function Glyphs( props ) {
    const glyphs = props.glyphs

    return (
        <div className="glyphs-cont">
            {glyphs.map(glyph => 
                <div className="glyph-cont">
                    <img src={majorGlyphImg} />
                    <div>{glyph.name}</div>
                </div>
            )}
        </div>
    )
}