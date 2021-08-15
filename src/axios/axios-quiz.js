import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-494a1-default-rtdb.firebaseio.com/'
})