
import { Link } from 'react-router-dom';

function factCard(props) {
    function handleFavorite() {
        
    }
    return (
        <div className='card'>
            <p>{props.factData.fact}</p>
            <Link to="/favorites" onClick={handleFavorite}>❤️</Link>
            </div>
    )
}

export default factCard;