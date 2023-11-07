import { Logo } from "../Logo"
import { Link, NavLink } from 'react-router-dom'
import './style.css'

export const Navigations = () => {
    return(
    <div className="menuNavigation">
        <Link to="/"><Logo></Logo></Link>{/* <img src="/logo.jpg" alt="" /> */}
        <ul> 
           <li><NavLink to="/products" className={ ({isActive}) => isActive ? "active" : ""}>Rakiety</NavLink></li>
            <li><NavLink to="/o-mnie" className={ ({isActive}) => isActive ? "active" : ""}>O mnie</NavLink></li>
            <li><NavLink to="/kontakt" className={ ({isActive}) => isActive ? "active" : ""}>Kontakt</NavLink></li>
            <li><NavLink to="/faq" className={ ({isActive}) => isActive ? "active" : ""}>Faq</NavLink></li>
            <li><NavLink to="/koszyk" className={ ({isActive}) => isActive ? "active" : ""}>Koszyk</NavLink></li>
        </ul>
    </div>)
}