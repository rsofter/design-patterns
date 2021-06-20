import { EditorState } from "./EditorState";

export class History {
	private states: EditorState[] = [];

	push(state: EditorState) {
		this.states.push(state);
	}

	pop(): EditorState {
		return this.states.pop();
	}
}