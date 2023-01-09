import LOGO_KASA from '../assets/LOGO_KASA.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

// exporter ce composant dans la partie pages/Home.jsx
export default function Navbar(){
    return(
        <nav className='navbar'>
            <img className='navbar_logo' src={LOGO_KASA} alt="logo kasa"></img>
            <div className='navbar_link'>
                <Link to={"/"} className="link_accueil">Accueil</Link>
                <Link to={"/Apropos/"} className="link_propos">A propos</Link>
            </div>
        </nav>
    )
}