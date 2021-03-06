import { Command } from "./fx/Command";

export class CompositeCommand implements Command {
	private commands: Command[] = [];

	add(command: Command) {
		this.commands.push(command);
	}

	execute(): void {
		this.commands.forEach(command => command.execute());
	}
}