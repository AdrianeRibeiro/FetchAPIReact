import { useFetch } from './hooks/useFetch'

type Repository = {
  id: string;
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isFetching } 
    = useFetch<Repository[]>("https://api.github.com/users/AdrianeRibeiro/repos")

  return (
    <>
      <ul>
        { isFetching && <p>Carregando</p> }
        {repositories?.map(repo => {
          return(
            <li key={repo.id}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description || ''}</p>
            </li>
          )
        })}
      </ul>
    </>
    
  )
}

export default App
