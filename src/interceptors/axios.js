import axios from "axios";

axios.defaults.baseURL = 'http://careerguidance-387416.uc.r.appspot.com/api/'

let refresh = false

axios.interceptors.response.use(resp => resp, async error => {

    if(error.response.status === 401 && !refresh ) {
        console.log('401')
        refresh = true
        /*const {status, data} = await axios.post('refresh', {}, {
            withCredentials: true
        })

        if (status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
            localStorage.setItem('jwt_token', data.token);
            return axios(error.config)
        }*/
    }
    refresh = false
    return error
})
