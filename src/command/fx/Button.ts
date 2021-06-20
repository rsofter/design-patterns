import { Command } from "./Command";

export class Button {
	private label: string;
	private command: Command;

	constructor(command: Command) {
		this.command = command;
	}

	click() {
		this.command.execute();
	}

	getLabel() {
		return this.label;
	}

	setLabel(label) {
		this.label = label;
	}
}