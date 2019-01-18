import {SPINNER} from '../actionTypes/actionTypes';

const dispatchSpinner = (status) => {
  return {
    type: SPINNER,
    status
  }
}

export default dispatchSpinner