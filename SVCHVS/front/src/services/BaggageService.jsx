import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'https://localhost:7276/Baggage';

class BaggageService {

    getAllComputerconfigurations() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    exportXls() {
        return axios.get('http://localhost:8080/api/employee/export/xls', {responseType: 'blob', headers: {'Content-Type': 'application/json'}})
    }

    authenticate(employee){
        return axios.post('http://localhost:8080/login', employee, {headers: {'Content-Type': 'application/json'}});
    }

    createComputerconfiguration(computerconfiguration) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, computerconfiguration)
    }

    getComputerconfigurationById(computerconfigurationId) {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + computerconfigurationId);
    }

    updateComputerconfiguration(computerconfigurationId, computerconfiguration) {
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + computerconfigurationId, computerconfiguration);
    }

    deleteComputerconfiguration(computerconfigurationId) {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + computerconfigurationId);
    }
}

export default new BaggageService();