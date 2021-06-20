import { Command } from "./fx/Command";

export class ResizeCommand implements Command {
	execute(): void {
		console.log("Resize");
	}

}