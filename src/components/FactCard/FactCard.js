
import { Link } from 'react-router-dom';
// import { addFavorite } from '../../services/facts-api';

// function factCard(props) {
//     // function handleFavorite(fact) {
//     //     const favorite = addFavorite(fact)
//     //     return favorite;
//     // }
    
//     return (
//         <div className='card'>
//             <p>{props.factData.fact}</p>
//             <Link to="/favorites" >❤️</Link>
//         </div>
//     )
// }
const factCard = (props) => (
   
        <div className='card'>
            <p>{props.factData.fact}</p>
            <Link to="/favorites" >❤️</Link>
        </div>
    
)

export default factCard;