import { GET_COURSES } from '../../actions/actionTypes/actionTypes';

const initialState = {
  courses: []
}

const courses = (state = initialState, action) => {
  const { type, courses } = action;
  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses
      }
    default:
      return state
  }
}

export default courses