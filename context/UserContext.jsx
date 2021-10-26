import api from '../pages/api/api';
import { useEffect, useState, createContext } from 'react'



export const UserContext = createContext({})

 export function UserProvider({ children }){

    const [users, setUsers] = useState([]);
    const [ page, setPage ] = useState(1)
    const [ loading, setLoading ] = useState(false)
  
   
    useEffect(() => {
      api.get(`?results=50&page=${page}`).then((response) => {
        setUsers(response.data.results)
        setPage(response.data.info.page + 1)
        console.log(response.data)
      })
  
    },[])
  
    async function handleNextPage() {
  
      setLoading(true)
  
      const response = await api.get(`?results=50&page=${page}`)
  
      setPage(response.data.info.page + 1)
  
      setUsers(oldUser => [...oldUser, ...response.data.results])
  
      setLoading(false)
     
    }
    
     return(
         <UserContext.Provider
          value={{
              handleNextPage,
              users,
              loading
          }}
         >
             {children}
        </UserContext.Provider>
     )
 }