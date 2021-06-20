import { DataSource } from "./DataSource";
import { Observer } from "./Observer";

export class Chart implements Observer {
	private dataSource: DataSource;

	constructor(dataSource: DataSource) {
		this.dataSource = dataSource;
	}

	update(): void {
		console.log("Chart got notified: " + this.dataSource.getValue());
	}
}