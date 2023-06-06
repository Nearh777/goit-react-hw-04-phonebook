import styled from '@emotion/styled';


export const ContainerFiltr = styled.div`
display: flex;
flex-direction: column;
width: 700px;

`;

export const Label = styled.label`
display: flex;
flex-direction: column;
font-family: 'Raleway';
width: 700px;
padding-left: 30px;
`; 


export const Input = styled.input`
width: 300px;
height: 25px;
outline: none;
margin-top: 5px;
margin-bottom: 30px;
border-radius: 5px;
border: 1px solid;
&:hover {
    background-color: #dcfcfa;
    color: #000066;
    transform: scale(1.1);
    transition-duration: 300ms;
  }
`;