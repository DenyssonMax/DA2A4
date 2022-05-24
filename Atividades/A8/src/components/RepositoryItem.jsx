
export function RepositoryItem(props){
return(
    <li>
    <strong>{props.Repository?.name ?? 'Repositório Padrão'}</strong>
    <p>{props.Repository?.description}</p>
    <a href={props.Repository?.link}>Acessar o respositório</a>
</li>
)
}