import { Container } from './styles';
import { format } from 'date-fns'
import Spinner from 'react-loader-spinner'
import TableOne from '../TableOne';
import { useContext } from 'react'
import { UserContext} from '../../context/UserContext'


function PacientItem() {

  const {
    handleNextPage,
    users,
    loading
  } = useContext(UserContext)

  return (
    <Container>
          <table>
              <thead>
                <tr>
                    <th>
                      <h3>Name</h3>
                    </th>

                    <th>
                    <h3>Gender</h3>
                    </th>

                    <th>
                    <h3>Birth</h3>
                    </th>

                    <th>
                    <h3>Actions</h3>
                    </th>
                </tr>
              </thead>
              <tbody>
                  {users?.map((user) => (
                    <TableOne 
                      key={user.login.uuid}
                      picture={user.picture.large}
                      name={user.name.first}
                      nameComplete={`${ user.name.first } ${ user.name.last }`}
                      gender={user.gender}
                      dateFirst={format(new Date(String(user.dob.date)), "dd-MM-yyyy")}
                      setPage={handleNextPage}
                    />
  
                    ))}
                </tbody>
          </table>

          {loading ? 
            <Spinner 
                type="Circle"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} 
              /> 
              : 
            <button onClick={handleNextPage}>Carregar mais</button>
          }
    
    </Container>
  );
};

export default PacientItem;
