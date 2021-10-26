import { Container } from './styles';
import api from '../../pages/api/api';
import { useEffect, useState } from 'react'



export function ModalDate(props) {
  /*const [users, setUsers] = useState([]);

  
  useEffect(() => {
    api.get("?results=1").then((data) => {
      setUsers(data.data.results)
     
    })
 
    //eslint-disable-next-line 
  },[])
*/
  return (
    <Container>
    

               <div>

                 <img src={props.picture}>
                   
                 </img>
               
                        <p>
                        {props.nameComplete}
                        </p>
                      
                        <br />
                     
                        <p>
                      {props.gender}
                        </p>
                      

                      <br />
                        <p>
                            {props.dateFirst}    
                        </p>
                      

          </div>
            
             
       

          
       
     
  </Container>
      
      
   
  );

};


