// Ici mettre en place le composant qui vas s'occuper des etoiles afficher
import StarRed from '../assets/StarRed.png';
import StarGray from '../assets/StarGray.png';

export default function Rating({rating}){
    // mettre en place le reste du composant
    const items = []
    for (let i = 1; i < 6; i++) {
        // ici je met en place une condition qui push l'image dans le tableau items
        i <= parseInt(rating) ? items.push(<img key={`${i}-${i}`} src={StarRed} className="stars" alt="star" />) : items.push(<img key={`${i}-${i}`} src={StarGray} className="stars" alt='star' />)
    }
    return (
        <div className='info_rating'>
            <div className="rating">{items}</div>
        </div>
    )
}