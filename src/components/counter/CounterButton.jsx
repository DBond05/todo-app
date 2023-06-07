
import "./Counter.css";


export default function CounterButton({ by, increment, decrement }) {

    return (
        <div className="Counter">


            <button className="counterButton"
                onClick={() => increment(by)}
            >+{by}</button>
            <button className="counterButton"
                onClick={() => decrement(by)}
            >-{by} </button>


        </div >

    )
}