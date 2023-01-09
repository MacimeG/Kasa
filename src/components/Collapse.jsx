import { useState } from "react"
import arrow from "../assets/Vector.png"
import arrowUp from '../assets/arrowUp.png'

export default function Collapse(props){
    // se servir de cette const pour ouvrir et fermer le collapse au cliques, et faire afficher les differentes description.
    const [isOpen, setOpen] = useState(false)
    
    return (
        <div className="collapse" onClick={()=> setOpen(!isOpen)}>

            <h1 className={props.className} >{props.title} <img className={props.icon} src={ isOpen ?arrowUp : arrow } alt="arrow"></img></h1>
            {isOpen && props.children}

        </div>
        
    )
}