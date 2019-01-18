import axios from 'axios';
import dispatchSpinner from '../dispatchSpinner/dispatchSpinner';
import dispatchUsers from '../dispatchUsers/dispatchUsers';
import dispatchCourses from '../dispatchCourses/dispatchCourses';


const fetchUsers = () => {
  let users = [];
  let cours = [];
  return dispatch => {
    dispatch(dispatchSpinner(true))
    axios.get('http://vidyaback.appelloproject.xyz/api/users/')
      .then(response => {
        users = response.data.results
        dispatch(dispatchUsers(users))
        let requestCount = 0;
        response.data.results.forEach(element => {
          requestCount++;
          cours.push(element.courses);
          if (requestCount === response.data.results.length) {
            dispatch(dispatchCourses(cours))
            dispatch(dispatchSpinner(false))
          }
        })

      })
  }
}

export default fetchUsers