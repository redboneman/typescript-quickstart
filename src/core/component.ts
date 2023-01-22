export interface PGComponent {
	connectedCallback?: () => void
	disconnectedCallback?: () => void
	attributeChangedCallback?: () => void
	observedAttributes?: string[]
}
