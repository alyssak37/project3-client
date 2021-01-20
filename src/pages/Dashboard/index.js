

import FactCard from '../../components/FactCard/FactCard';
// import styles from './Dashboard.module.css';

<div className='card'/>
function Dashboard(props) {
    function handleClick() {
        window.location.reload()
    }
    function handleFact() {
        
    }
    return (
        <div>
            
            <FactCard catFact={props.catFact}/>
            <p>{props.factData}</p>
        <button onClick={handleClick}>Next Fact</button>
        <button to="/favorites" onClick={handleFact}>Save fact</button>
    
        </div>
    )
        
}

export default Dashboard;