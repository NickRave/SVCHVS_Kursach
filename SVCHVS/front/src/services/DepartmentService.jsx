import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'https://localhost:7101/Department';

class DepartmentService {

    getAllDepartments() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    exportXls() {
        return axios.get('http://localhost:8080/api/employee/export/xls', {responseType: 'blob', headers: {'Content-Type': 'application/json'}})
    }

    authenticate(employee){
        return axios.post('http://localhost:8080/login', employee, {headers: {'Content-Type': 'application/json'}});
    }

    createDepartment(department) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, department)
    }

    getDepartmentById(departmentId) {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + departmentId);
    }

    updateDepartment(departmentId, department) {
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + departmentId, department);
    }

    deleteDepartment(departmentId) {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + departmentId);
    }
}

export default new DepartmentService();