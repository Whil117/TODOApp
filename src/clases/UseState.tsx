import React, { useState } from 'react'

interface Props {
    
}
interface State {
    counter1:number
    counter2:number
}

const UseState = (props: Props) => {
    const [counter, setCounter] = useState<State>({
        counter1:10,
        counter2:20
    })
    return (
        <div>
            <h1>UseState {counter.counter1  }</h1>
            <h1>UseState {counter.counter2  }</h1>

            <button onClick={()=>setCounter({
                ...counter,
                counter1:counter.counter1 + 1
            })}>+1</button>
        </div>
    )
}

export default UseState

