import { Container } from './styles';
import { useEffect, useState } from 'react'

import  Modal  from 'react-modal';
import { ModalDate } from '../ModalDate';

function TableOne(props) {

  const [modalUser, setModalUser] = useState(false);

  function handleOpenModal(){
    setModalUser(true);
  }

  function handleCloseModal(){
    setModalUser(false);
  }  

  return (
      <tr>
          <td>
            <p>
            {props.name}
            </p>
          </td>

          <td>
            <p>
          {props.gender}
            </p>
          </td>

          <td>
            <p>
                {props.dateFirst} 
            </p>
          </td>

          <td>
            <button 
            type="button" 
            onClick={handleOpenModal}
            >
              view
            </button>
        
            <Modal 
              isOpen={modalUser}
              onRequestClose={handleCloseModal}
              >
              
                <ModalDate  
                  picture={props.picture}
                  name={props.name}
                  nameComplete={props.nameComplete}
                  gender={props.gender}
                  dateFirst={props.dateFirst}
                  />
              
            </Modal>
          
          </td>

        </tr>
  );
};

export default TableOne;
