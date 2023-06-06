import React from "react";

import {Input, ContainerFiltr, Label} from './Filter.styled'

export const Filter = ({value, onChange}) => (
   <ContainerFiltr>
     <Label >
Find contacts by name
<Input 
       type="text"
       value={value}
       onChange={onChange}
       placeholder="Пошук за ім'ям"
     />
       </Label>
   </ContainerFiltr>
       
)