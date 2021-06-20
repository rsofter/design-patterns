import { DataSource } from "./DataSource";
import { Observer } from "./Observer";

export class SpreadSheet implements Observer {
	private dataSource: DataSource;

	constructor(dataSource: DataSource) {
		this.dataSource = dataSource;
	}

	update(): void {
		console.log("SpreedSheet got notified: " + this.dataSource.getValue());
	}
}