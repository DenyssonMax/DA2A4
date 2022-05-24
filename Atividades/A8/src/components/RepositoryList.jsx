import { Counter } from "./counter"
import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name:"Atividade",
    description: "Descrição da atividade",
    link: "https://github.com/DenyssonMax/DW2A4/tree/main/Atividades"
}
export function RepositoryList(){
    return (
        <>
            < RepositoryItem  repository={repository}/>
            < Counter />            
         </>
    )
}
