import { Logo } from "../Logo"
import { Link, NavLink } from 'react-router-dom'
import './style.css'

export const Navigations = () => {
    return(
    <div className="menuNavigation">
        <Link to="/"><Logo></Logo></Link>{/* <img src="/logo.jpg" alt="" /> */}
        <ul>
            <li><NavLink to="/products" className={ ({isActive}) => isActive ? "active" : ""}>Rakiety</NavLink></li>
            <li><Link to="/o-mnie">O mnie</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
            <li><Link to="/faq">Faq</Link></li>
            <li><Link to="/koszyk">Koszyk</Link></li>
        </ul>
    </div>)
}