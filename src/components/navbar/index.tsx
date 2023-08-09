import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='bg-red-300'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar