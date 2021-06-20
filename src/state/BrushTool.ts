import { Tool } from "./Tool";

export class BrushTool implements Tool {
	mouseDown(): void {
		console.log("Brush tool");
	}

	mouseUp(): void {
		console.log("Draw a line");
	}
}