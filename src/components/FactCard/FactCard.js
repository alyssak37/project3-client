
import { Link } from 'react-router-dom';

function factCard(props) {
    
    return (
        <div className='card'>
            <p>{props.factData.fact}</p>
            <Link to="/favorites" >❤️</Link>
            </div>
    )
}

export default factCard;