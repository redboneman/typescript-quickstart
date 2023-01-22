import {PGComponent} from './core/component';

class PGTestComponent extends HTMLElement implements PGComponent {

	constructor() {
		super();
	}

	connectedCallback() {
		console.log('OMG IT WORKS???')
	}

}

customElements.define('pg-el', PGTestComponent)
