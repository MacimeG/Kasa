import logo_footer from '../assets/logo_footer.png'
import "../styles/Footer.css"


export default function Footer(){
    return (
        <footer className='footer'>
            <div className='logo_footer'>
                <img className='Img-footer' src= {logo_footer} alt="logo"></img>
            </div>
            <div className='copyright'>© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}