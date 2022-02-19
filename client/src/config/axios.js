import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:5001',
    // baseURL: 'https://emailtesternodemailer.herokuapp.com'

})
export default axios