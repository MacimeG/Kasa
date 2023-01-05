import { useState } from "react";
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"

import "../styles/Caroussel.css"

export default function Caroussel(props){
    // mettre en place tout les composant necessaire au fonctionnement de la page FicheLogement
    // je met en place un hook qui me permet de savoir sur quel photo je suis, et pouvoir la "modifier"
    const [current, setCurrent] = useState(0);
    // ce que j'appelle "slides", sont toutes les pictures dans le fichier logement.json
    const length = props.slides.length
    
    // je met en place des ternaire pour le fonctionnement du caroussel au cliques sur une des flèches.
    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    const nextSlide = ()=>{
        setCurrent(current === length -1 ? 0 : current +1)
    }
    // ici je verifie que le tableau est vide.
    // if(!Array.isArray(props.slides) || props.slides.length <= 0){
    //     return null;
    // }

    return(
        <div className="caroussel">
            <img className="left-arrow" src={arrowLeft} alt="fleche gauche" onClick={prevSlide}></img>
            <img className="right-arrow" src={arrowRight} alt="fleche gauche" onClick={nextSlide}></img>
            {props.slides.map((slide, index)=>{
                return(
                    // ici j'ai mis en place une condition, si l'index et = a la photo actuelle alors la class ce transform en slide-active, sinon en slide, si l'index et = a la photo actuelle, alors il faut m'afficher la photo actuelle.
                    <div className={index === current ? 'slide-active': 'slide'} key={index}>
                        {index === current && (
                            <img className="img-caroussel" src={slide} alt=""/>
                        )}
                     
                    </div>
                )
            })}
        </div>
    )
}