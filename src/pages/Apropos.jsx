import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import bannerApropos from "../assets/banner_aPropos.png"
import Propos from "../data/Apropos.json"
import Footer from "../components/Footer"

// supprimer cet import, et installé styled components pour manipulé plus facilement le css
import "../styles/Collapse.css"


import Collapse from "../components/Collapse"
// import arrow from "../assets/Vector.png"

export default function Apropos(){
    return(
        <div className="aPropos_container">
            <Navbar/>
            <div className="banner-container">
            <Banner img={bannerApropos} alt="moutain"/>
            </div>
            {/* rajouter les informations de la page a propos, rajouter le collapse */}
            <div className="allCollapse">
                {/* mettre tout ce contenu dans le components Collapse. */}
                {Propos.map((element)=> (
                    <Collapse className ="collapse_title"title={element.title} key={element.id} icon="icon_collapse" >
                      <span className="collapse_description">{element.description}</span> 
                   
                        </Collapse>

                ))}
            </div>
            <Footer/>
        </div>
    )
}