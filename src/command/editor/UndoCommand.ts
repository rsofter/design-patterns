import { Command } from "./Command";
import { History } from "./History";

export class UndoCommand implements Command {
	private history: History;

	constructor(history: History) {
		this.history = history;
	}

	execute(): void {
		if (this.history.size() > 0) {
			this.history.pop().unexecute();
		}
	}
}