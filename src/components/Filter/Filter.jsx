import React from "react";
import PropTypes from 'prop-types';

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


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};