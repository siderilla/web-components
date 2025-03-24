import StudentService from './student-service.js';

export default class SuperGrid extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.service = new StudentService();
	}

	async connectedCallback() {
		this.service = new StudentService();
		this.students = await this.service.loadStudents();
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = this.students
			.map(s => `<student-card selected-student='${JSON.stringify(s)}'></student-card>`)
			.join('');
	}

}

customElements.define('super-grid', SuperGrid);