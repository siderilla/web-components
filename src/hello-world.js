class HelloWorld extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get observedAttributes() {
		return ['message'];
	}

	attributeChangeCallback(name, oldValua, newValue) {

		if (name === 'message') {
			this.render();
		}
	}

	connectedCallback() {
		this.render();
		// this.shadowRoot.innerHTML = `
		// 	<style>
		// 		:host {
		// 			display: block;
		// 			padding: 1rem;
		// 			background-color: white;
		// 			color: black;
		// 			text-align: center;
		// 			font-family: Verdana;
		// 		}
		// 	</style>
		// 	<span>Ciao!</span>
		// `;
	}

	render() {
		const text = this.getAttribute('message') || 'Ciao, mondo!';
		this.shadowRoot.innerHTML = `
			<style>
				:host { display:block; padding:1rem; background:#FF0080; color:white; text-align:center; }
			</style>
			<span>${text}</span>
		`;
	}
}

customElements.define('hello-world', HelloWorld);