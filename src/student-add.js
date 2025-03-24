class StudentAdd extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	connectedCallback() {

		this.shadowRoot.innerHTML = `<button id="add">➕ Add Student</button>`;
		this.shadowRoot.querySelector('#add')
		.addEventListener('click', () => this.handleAdd());
	}

	async handleAdd() {
		const name = prompt('Name?');
		const surname = prompt('Surname?');
		const yob = Number(prompt('Year?'));
		if (name && surname && yob) {
			const student = { name, surname, yob };
			const grid = document.querySelector('super-grid');
			grid.service.addStudent(student);
			grid.students = grid.service.students;
			grid.render();
		}
	}
}

customElements.define('student-add', StudentAdd);