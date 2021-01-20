

import FactCard from '../../components/FactCard/FactCard';
import styles from './Dashboard.module.css';

<div className={styles.Dashboard}/>
function Dashboard(props) {
    function handleClick() {
        window.location.reload()
    }
    function handleFact() {

    }
    return (
        <main>
        <div>
            <FactCard catFact={props.catFact}/>
        <p>{props.factData}</p>
            <button onClick={handleClick}>Next Fact</button>
            <button to="/favorites" onClick={handleFact}>Save fact</button>
        </div>
        </main>
    )
        
}

export default Dashboard;