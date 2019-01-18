import {GET_COURSES} from '../actionTypes/actionTypes';

const dispatchCourses = (courses) => {
  return {
    type: GET_COURSES,
    courses
  }
}

export default dispatchCourses