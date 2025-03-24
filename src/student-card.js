class StudentCard extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'});

	}

	get student() {
		return JSON.parse(this.getAttribute('selected-student'));
	}

	connectedCallback() {

		this.render();

	}

	render() {

		this.shadowRoot.innerHTML = `
			<style>
				.card { border:1px solid #ccc; padding:8px; border-radius:4px; }
			</style>
			<div class="card">
				<strong>${this.student.name} ${this.student.surname}</strong>
				<div>Age: ${new Date().getFullYear() - this.student.yob}</div>
			</div>
		`
	}

}

customElements.define('student-card', StudentCard);