import majorGlyphImg from './majorglyph.jpg'

export default function Glyphs( props ) {
    const glyphs = props.glyphs

    return (
        <div className="glyphs-cont">
            {glyphs.map((glyph,idx) => 
                <div key={glyph.name} className="glyph-cont">
                    <img alt={glyph.name} src={majorGlyphImg} />
                    <div>{glyph.name}</div>
                </div>
            )}
        </div>
    )
}