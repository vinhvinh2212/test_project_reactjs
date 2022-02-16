import axios from 'configs/axios';

const CsrfService = {
    CreateCSRFCookie() {
        return axios.get('/sanctum/csrf-cookie');
    }
}

export default CsrfService;