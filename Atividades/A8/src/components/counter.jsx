
export function Counter(){
    let counter = 0

    function increment(){
        counter +=1
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}> Incrementar </button>
        </div>

    )
}