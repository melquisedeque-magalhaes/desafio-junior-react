import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    padding: 64px 0px;

    table {
        width: 50%;
        //border-spacing: 0 0.5rem;
        border: 1px solid black;
        table-layout: fixed;
        text-align: center;
        background: #666;
        
        thead {
            background: #ccc;
        }

        tbody {
            tr:nth-child(even) {
                background-color: #dddddd;
            }
        }

    }
`;

