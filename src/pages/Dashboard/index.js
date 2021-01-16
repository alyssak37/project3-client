
import FactCard from '../../components/FactCard/FactCard';

function Dashboard(props) {


    function handleClick() {
        window.location.reload()
    }
    return (
        <div>
            <FactCard catFact={props.catfact}/>
            <p>{props.factData.fact}</p>
            <button onClick={handleClick}>Next Fact</button>
        </div>
    )
}

export default Dashboard;