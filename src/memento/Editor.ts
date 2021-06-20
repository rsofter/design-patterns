import { EditorState } from "./EditorState";

export class Editor {
	private content: string;

	createState(): EditorState {
		return new EditorState(this.content);
	}

	restore(state: EditorState) {
		this.content = state.getContent();
	}

	getContent(): string {
		return this.content;
	}

	setContent(value: string) {
		this.content = value;
	}
}