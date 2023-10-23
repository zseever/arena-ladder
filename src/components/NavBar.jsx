import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link to='/'>Home</Link>
            {/* <Link to='/hello'></Link>> */}
        </div>    
    )
}