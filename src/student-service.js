import SuperGrid from "./super-grid.js";

export default class StudentService {
	async loadStudents() {
		this.students = JSON.parse(localStorage.getItem('students'))
			|| await this.getStudentsFromJson();
		return this.students;
	}

	async getStudentsFromJson() {
		const resp = await fetch('../assets/students.json');
		return resp.json();
	}

	saveStudents() {
		localStorage.setItem('students', JSON.stringify(this.students));
	}

	addStudent(student) {
		this.students.push(student);
		this.saveStudents();
	}
}
