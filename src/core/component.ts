export class PGComponent extends HTMLElement {

	private readonly _tag: string

	constructor(tag23: string) {
		super()
		console.log(PGComponent.name);
		if (!tag23) {
			console.error('Invalid tag!')
		}
		this._tag = tag23
	}

}
