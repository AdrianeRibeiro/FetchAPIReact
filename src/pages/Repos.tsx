import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom';

export type Repository = {
  id: string;
  full_name: string;
  description: string;
}

export function Repos() {

  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get("https://api.github.com/users/AdrianeRibeiro/repos")
    
    return response.data
  }, {
    staleTime: 1000 * 60, //1 minuto
  })

  return (
    <div>
      <ul>
        { isFetching && <p>Carregando</p> }
        {data?.map(repo => {
          return(
            <li key={repo.id}>
              <Link to={`repos/${repo.full_name}`}>
                <strong>{repo.full_name}</strong>
              </Link>
              <p>{repo.description || ''}</p>
            </li>
          )
        })}
      </ul>
    </div>
    
  )
}
