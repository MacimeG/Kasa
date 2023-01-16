import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import imgHome from "../assets/img_banner.png"
import Card from "../components/Card";

import Logements from "../data/Logements.json"


function Homepage(){
    return (
        <div>
            <Navbar/>
            <div className="banner-container">
            <Banner className="banner" img={imgHome} description ={"chez vous, partout et ailleurs"} alt="island"/>
            </div>
          
            <div className="container_card">
                {Logements.map((logement) => (
                    // ici je me sert de la destructuration pour pouvoir passer le props.
                    <Card {... logement} key={logement.id}/>
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Homepage