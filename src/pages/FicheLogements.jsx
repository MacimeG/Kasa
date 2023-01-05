import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useParams, Navigate } from "react-router-dom"

import Logements from '../data/Logements.json'
import Caroussel from "../components/Caroussel";
import "../styles/FicheLogement.css";

import Collapse from "../components/Collapse.jsx";
import Rating from "../components/Rating";


export default function FicheLogement(){
    const { id } = useParams();

    // pour pouvoir récupéré le bon id, ainsi que les bonnes informations.
    const currentLogement = Logements.find((el)=>{
        return el.id === id
    })
    // si ce n'est pas le bon id, alors je renvoi vers la page 404 grâce a Navigate
    if(!currentLogement){
       return <Navigate to="/Error-404"/>
    }
    return (
        <div>
            <Navbar/>
            <div className="ficheLogement_Container">
                {/* mettre en place le carrousel */}
                <Caroussel slides={currentLogement.pictures}/>
                <div className="ficheLogement_info">
                    {/* ici rajouter le nom et la photo de la personne grace a host.name & host.picture */}
                    <div className="host_info">
                        <p className="hostName">{currentLogement.host.name}</p>
                        <img className="hostPic" alt="hostprofil" src={currentLogement.host.picture}></img>
                    </div>
                    <span className="ficheLogement_title">{currentLogement.title}</span>
                    <p className="ficheLogement_location">{currentLogement.location}</p>
                    <div className="ficheLogement_tags">
                        {currentLogement.tags.map((tag, index)=>(
                           <p className="tag" key={index}>{tag}</p>
                        ))}
                        {/* rajouter ici le rating */}
                        <Rating rating={currentLogement.rating}/>
                    </div>
                </div>
                <div className="collapse_ficheLogement">

                <Collapse className="collapse_title_logement" title={'Description'} icon="icon_collapse_logement">
                        <span className="collapse_description_logement">{currentLogement.description}</span>   
                </Collapse>

                <Collapse className="collapse_title_logement" title={'Équipements'}icon="icon_collapse_logement" >
                        {currentLogement.equipments.map((equipment, index)=> (
                            <div className="collapse_description_logement" key={index}>
                            <ul>
                                <li>{equipment}</li>
                            </ul> 

                            </div>
                        ))}
                </Collapse>

                </div>
            </div>
            <Footer/>
        </div>
    )
}