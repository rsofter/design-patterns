import { Tool } from "./Tool";

export class Canvas {
	private currentTool: Tool;

	mouseDown(): void {
		this.currentTool.mouseDown();
	}

	mouseUp(): void {
		this.currentTool.mouseUp();
	}

	getCurrentTool(): Tool {
		return this.currentTool;
	}

	setCurrentTool(currentTool: Tool) {
		this.currentTool = currentTool;
	}
}