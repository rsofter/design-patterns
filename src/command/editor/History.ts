import { UndoableCommand } from "./UndoableCommand";

export class History {
	private commands: UndoableCommand[] = [];

	push(command: UndoableCommand) {
		this.commands.push(command);
	}

	pop(): UndoableCommand {
		return this.commands.pop();
	}

	size(): number {
		return this.commands.length;
	}
}