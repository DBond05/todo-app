import "./Counter.css"
import { useState } from "react";
import CounterButton from "./CounterButton";


export default function Counter() {

    const [count, setCount] = useState(0)

    function incrementCounter(by) {
        setCount(count + by)
    }
    function decrementCounter(by) {
        setCount(count - by)
    }
    function resetCounter() {
        setCount(0)
    }
    return (
        <>
            <span className="count">{count}</span>
            <CounterButton by={1} increment={incrementCounter}
                decrement={decrementCounter} />
            <CounterButton by={2} increment={incrementCounter}
                decrement={decrementCounter} />
            <CounterButton by={5} increment={incrementCounter}
                decrement={decrementCounter} />
            <button className="resetButton"
                onClick={resetCounter}>Reset</button>
        </>
    )
}

