import {combineReducers} from 'redux';
import users from '../users/users';
import spinner from '../spinner/spinner';
import courses from '../courses/courses';


export default combineReducers({
  spinner,
  users,
  courses
})