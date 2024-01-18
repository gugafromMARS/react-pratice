import { useState } from "react"

const EventHandling = () => {


    const [count, setCount] = useState(0)


    function updateCounter(){
        setCount(count+1)
    }

    function reseting(){
        setCount(0)
    }

    return(

        <div>
            <h1>Event Handling</h1>
            <p>Count: {count}</p>
            <button onClick={updateCounter}>Increment</button>
            <button onClick={reseting}>Reset</button>
        </div>
    )

}

export default EventHandling