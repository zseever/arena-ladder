import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="empty-div"></div>
            <div>Classic Armory</div>
            <div className="links-cont">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/leaderboard'>Leaderboard</Link>
                <Link className="nav-link" to='/'>AnotherLink</Link>
            </div>
        </div>    
    )
}