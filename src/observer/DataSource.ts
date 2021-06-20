import { Subject } from "./Subject";

export class DataSource extends Subject {
	private value: number;

	getValue() {
		return this.value;
	}

	setValue(value: number) {
		this.value = value;
		this.notifyObservers();
	}
}