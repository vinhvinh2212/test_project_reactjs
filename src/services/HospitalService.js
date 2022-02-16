import axios from 'configs/axios';

const HospitalService = {
    getList() {
        return axios.get('/api/hospital/list');
    }
}

export default HospitalService;