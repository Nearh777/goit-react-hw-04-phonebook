import styled from '@emotion/styled';


export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 25px;
margin: 0;

font-family: 'Raleway';
`;

export const ListItem = styled.li`
display: flex;
width: 400px;
justify-content: space-between;

`;

export const BtnCont = styled.button`
width: 50px;
height: 20px;
margin-left: 20px;
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