export class HtmlDocument {
	private content: string;

	makeBold() {
		this.content = `<b>${this.content}</b>`
	}

	getContent(): string {
		return this.content;
	}

	setContent(content: string) {
		this.content = content;
	}
}