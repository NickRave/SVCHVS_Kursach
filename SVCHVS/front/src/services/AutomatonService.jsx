import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'https://localhost:7276/Automaton';

class AutomatonService {

    getAllComputerclasses() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    exportXls() {
        return axios.get('http://localhost:8080/api/employee/export/xls', {responseType: 'blob', headers: {'Content-Type': 'application/json'}})
    }

    authenticate(employee){
        return axios.post('http://localhost:8080/login', employee, {headers: {'Content-Type': 'application/json'}});
    }

    createComputerclass(computerclass) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, computerclass)
    }

    getComputerclassById(computerclassId) {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + computerclassId);
    }

    updateComputerclass(computerclassId, computerclass) {
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + computerclassId, computerclass);
    }

    deleteComputerclass(computerclassId) {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + computerclassId);
    }
}

export default new AutomatonService();