import { Counter } from "./counter"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'
import { useState, useEffect } from "react"

const repository = {
    name:"Atividade",
    description: "Descrição da atividade",
    link: "https://github.com/DenyssonMax/DW2A4/tree/main/Atividades"
}

//
export function RepositoryList(){

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/DenyssonMax/repos')
        .then(Response => Response.json())
        .then(data => console.log(data))
    }, [])

    

    return (
    <section className="repository-list">
        <h1> Lista de Repositórios</h1>
            <ul>
            < RepositoryItem  repository={repository}/>
            < RepositoryItem  repository={repository}/>
            < RepositoryItem  repository={repository}/>
            </ul>   
    </section>
             
    )
}
