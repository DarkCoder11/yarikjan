import { GET_USERS } from '../../actions/actionTypes/actionTypes';

const initialState = {
  users: []
}

const users = (state = initialState, action) => {
  const { type, users } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users
      }
    default:
      return state
  }
}

export default users