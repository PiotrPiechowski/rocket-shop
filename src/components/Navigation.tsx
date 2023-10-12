import { Logo } from "./Logo"

export const Navigations = () => {
    return(
    <div className="menuNavigation">
        <Logo></Logo>{/* <img src="/logo.jpg" alt="" /> */}
        <ul>
            <li>Rakiety</li>
            <li>O mnie</li>
            <li>Kontakt</li>
            <li>Faq</li>
            <li>Koszyk</li>
        </ul>
    </div>)
}