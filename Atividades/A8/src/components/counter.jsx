import { useState } from "react"

export function Counter(){
    //imutabiliade 
    const [counter, setCounter] = useState(0)

    //criando uma nova variavel counter na memoria 
    function increment(){
       setCounter(Counter + 1)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}> Incrementar </button>
        </div>

    )
}