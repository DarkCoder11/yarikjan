import { SPINNER } from '../../actions/actionTypes/actionTypes';

const initialState = {
  status: false
}

const spinner = (state = initialState, action) => {
  const { type, status } = action;
  switch (type) {
    case SPINNER:
      return {
        ...state,
        status
      }
    default:
      return state
  }
}

export default spinner