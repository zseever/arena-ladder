import { Link } from 'react-router-dom'

export default function NavBar( {gameVersion, setGameVersion} ) {
    return (
        <div className="nav-bar">
            <div className="game-version-button-bar">
                <button className={gameVersion === 'wrath' ? 'selected' : ''} onClick={() => setGameVersion('wrath')}>Wrath of the Lich King</button>
                <button className={gameVersion === 'sod' ? 'selected' : ''} onClick={() => setGameVersion('sod')}>Season of Discovery</button>
            </div>
            <div>{gameVersion === 'wrath' ? 'Wrath of the Lich King' : 'Season of Discovery'} Classic Armory</div>
            <div className="links-cont">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/leaderboard'>Leaderboard</Link>
                <Link className="nav-link" to='/'>AnotherLink</Link>
            </div>
        </div>    
    )
}