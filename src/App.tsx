import { useState, useEffect } from 'react'

type Repository = {
  id: string;
  full_name: string;
  description: string;
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch("https://api.github.com/users/AdrianeRibeiro/repos")
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
  }, [])

  return (
    <div>
      <ul>
        {repositories && repositories.map(repo => {
          return(
            <li key={repo.id}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description || ''}</p>
            </li>
          )
        })}
      </ul>
    </div>
    
  )
}

export default App
