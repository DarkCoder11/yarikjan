import {GET_USERS} from '../actionTypes/actionTypes';

const dispatchUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}

export default dispatchUsers