import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    
    tr{
        //display: flex;
        //align-items: center;
       // justify-content: center;
        border: 3px solid;
        border-color: black;
    }
    td{
        //display: flex;
        //align-items: center;
       // justify-content: center;
        border: 3px solid;
        border-color: black;
    }
`;

export const Tr = styled.tr`
        border: 3px solid;
        border-color: black;
       // align-items: center;
        `;
        export const Td = styled.td`
        border: 3px solid;
        border-color: black;
       // align-items: center;
        `;