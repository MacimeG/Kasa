import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import bannerApropos from "../assets/banner_aPropos.png"
import Propos from "../data/Apropos.json"
import Footer from "../components/Footer"

import "../styles/Collapse.css"


import Collapse from "../components/Collapse"


export default function Apropos(){
    return(
        <div className="aPropos_container">
            <Navbar/>
            <div className="banner-container">
            <Banner img={bannerApropos} alt="moutain"/>
            </div>
            <div className="allCollapse">
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