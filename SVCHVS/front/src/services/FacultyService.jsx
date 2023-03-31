import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'https://localhost:7101/Faculty';

class StudentService {

    getAllStudents() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    exportXls() {
        return axios.get('http://localhost:8080/api/employee/export/xls', {responseType: 'blob', headers: {'Content-Type': 'application/json'}})
    }

    authenticate(employee){
        return axios.post('http://localhost:8080/login', employee, {headers: {'Content-Type': 'application/json'}});
    }

    createStudent(student) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, student)
    }

    getStudentById(studentId) {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + studentId);
    }

    updateStudent(studentId, student) {
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + studentId, student);
    }

    deleteStudent(studentId) {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + studentId);
    }
}

export default new StudentService();