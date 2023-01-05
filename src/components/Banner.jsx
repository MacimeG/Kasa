import "../styles/Banner.css"

export default function Banner(props){
    return(
        <div className="banner">
            <img className="imgBanner" src={props.img} alt={props.alt}></img>
            {props.description && (
                <div className="text_onImg">
                    <h1>{props.description}</h1>
                </div>
            )}
        </div>
    )
}