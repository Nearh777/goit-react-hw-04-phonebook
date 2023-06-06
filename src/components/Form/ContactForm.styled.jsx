import styled from '@emotion/styled';


export const Form = styled.form`
display: flex;
flex-direction: column;
width: 700px;
padding-left: 30px;
margin-botom: 30px;

`;

export const Input = styled.input`
width: 300px;
height: 25px;
outline: none;
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

export const BtnForm = styled.button`
width: 90px;
height: 30px;

border-radius: 5px;
font-size: 12px;
border: none;
background-color: #6600CC;
color: white;
&:hover {
    background-color: #faa40a;
    color: #f9f1f1;
    transform: scale(1.1);
    transition-duration: 300ms;
  }

`;

export const Title = styled.h2`
font-family: 'Raleway';
margin: 0;
`;