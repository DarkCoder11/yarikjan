import React from 'react';
import './input.css';
import Aux from '../../../hoc/Aux/Aux';

const input = props => {

  let inputElement = null;
  const { elementType } = props;

  switch (elementType) {
    case 'search':
      inputElement = (
        <input type="text" value={props.value} onChange={(event) => props.change(event)} placeholder="Search for teachers, courses" className="search" />
      )
      break;
    default:
      elementType = null
  }

  return (
    <Aux>
      {inputElement}
    </Aux>



  )
}

export default input