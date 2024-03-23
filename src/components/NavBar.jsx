import { Link } from 'react-router-dom'

export default function NavBar( {gameVersion, setGameVersion} ) {
    return (
        <div className="nav-bar">
            <div className="game-version-button-bar">
                <Link to='/'><button className={gameVersion === 'wrath' ? 'selected' : ''+' game-version-button'} onClick={() => setGameVersion('wrath')}>Wrath of the Lich King</button></Link>
                <Link to='/'><button className={gameVersion === 'sod' ? 'selected' : ''+' game-version-button'} onClick={() => setGameVersion('sod')}>Season of Discovery</button></Link>
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