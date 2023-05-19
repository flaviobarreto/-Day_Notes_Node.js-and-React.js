import * as React from 'react';
import Radio from '@mui/material/Radio';

import './style.css'


export default function RadioButton({selectedValue, handleChange}) {

  const controlProps = (item) => ({
    checked: selectedValue === item,
   // onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div className="radioOptions">
      <Radio 
      //checked = {selectedValue === 'all'}
      onChange ={e => handleChange(e.target)}
     // value="all"
      {...controlProps('all')} sx={{ color: '#FFD3CA',  '&.Mui-checked': {  color: '#EB8F7A', }, }}/> 
      <span >Todos</span>

      <Radio 
      //checked = {selectedValue === 'true'}
      onChange ={e => handleChange(e.target)}
      //value="true"

      {...controlProps('true')} sx={{ color: '#FFD3CA',  '&.Mui-checked': {  color: '#EB8F7A', }, }} />
      <span>Prioridade</span>

      <Radio 
     // checked = {selectedValue === 'false'}
      onChange ={e => handleChange(e.target)}
      //value="false"

      {...controlProps('false')} sx={{ color: '#FFD3CA',  '&.Mui-checked': {  color: '#EB8F7A', }, }}
      />
      <span>Normal</span>
    </div>
  );
}