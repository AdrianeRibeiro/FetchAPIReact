import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { queryClient } from "../services/queryClient";
import { Repository } from "./Repos";

export function Repo() {
  console.log('aaaa')
  const params = useParams()
  const currentRepository = params['*'] as string;

  const queryClient = useQueryClient()

  async function handleChangeRepoDescription() {
    //chamada API para atualizar a descrição do repositório
    const previousRepos = queryClient.getQueryData<Repository>('repos')
    
    //await queryClient.invalidateQueries(['repos'])

    if (previousRepos) {
      const nextRepos = previousRepos.map(repo => {
        if(repo.full_name === currentRepository) {
          return { ...repo, description: 'Testando' }
        } else {
          return repo;
        }
      })
      queryClient.setQueryData('repos', nextRepos)
    }
  }

  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepoDescription}>Alterar</button>
    </div> 
  )
}