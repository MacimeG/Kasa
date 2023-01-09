import React from 'react';
import "../styles/Card.css"
import { Link } from 'react-router-dom'


export default function Card(props){
    return(
        <div className="card">
            <Link to={`/FicheLogements/`+ props.id}>
            <div className="Imj_card">
                <img className="imgCard" src={props.cover} alt={props.title}></img>
                <p className='card_title'>{props.title}</p>
            </div>
            </Link>
        </div>
    )
}