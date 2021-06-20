import { BoldCommand } from "./command/editor/BoldCommand";
import { History } from "./command/editor/History";
import { HtmlDocument } from "./command/editor/HtmlDocument";
import { UndoCommand } from "./command/editor/UndoCommand";
import { Chart } from "./observer/Chart";
import { DataSource } from "./observer/DataSource";
import { SpreadSheet } from "./observer/SpreadSheet";

class App {
	/** Entry point of our app */
	public static start() {
		let dataSource = new DataSource();
		let sheet1 = new SpreadSheet(dataSource);
		let sheet2 = new SpreadSheet(dataSource);
		let chart = new Chart(dataSource);

		dataSource.addObserver(sheet1);
		dataSource.addObserver(sheet2);
		dataSource.addObserver(chart);

		dataSource.setValue(1);
	}
}

App.start();