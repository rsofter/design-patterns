import { Observer } from "./Observer";

export class Subject {
	private observers: Observer[] = [];

	addObserver(observer: Observer) {
		this.observers.push(observer);
	}

	removeObserver(observer: Observer) {
		this.observers = this.observers.filter(item => item != observer);
	}

	notifyObservers() {
		this.observers.forEach(observer => observer.update())
	}
}