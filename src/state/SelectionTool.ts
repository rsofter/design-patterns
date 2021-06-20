import { Tool } from "./Tool";

export class SelectionTool implements Tool {
	mouseDown(): void {
		console.log("Selection tool");
	}

	mouseUp(): void {
		console.log("Draw a dashed rectangle");
	}
}