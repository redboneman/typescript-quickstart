import {PGComponent} from './core/component';

class Test extends HTMLElement {

	static observedAttributes = ['message'];
	private _name: string | null | undefined;

	constructor() {
		super();
		this.addEventListener('change', this.callMe.bind(this))
	}

	connectedCallback() {
		console.log('created!')
		console.log(this.getAttribute('message'))
	}

	attributeChangedCallback(name: string, oldValue: any, newValue: any) {
		console.log('ATTR CHANGED:', name, oldValue, newValue)
		this._name = this.getAttribute('message');
	}

	public callMe() {
		console.log('changed')
	}

}

customElements.define('test-el', Test)

setTimeout(() => {
	const el: any = document.querySelector('test-el')
	if (el) {
		el.innerHTML = 'Content changed!'
	}
}, 1000)

class PGTestComponent extends PGComponent {
	constructor(props: any) {
		super(props);
	}

}

const pgt = new PGTestComponent('testy')
