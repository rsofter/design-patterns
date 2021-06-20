import { Iterator } from "./Iterator";

export class BrowseHistory {
	private urls: string[] = [];

	push(url: string) {
		this.urls.push(url);
	}

	pop() {
		return this.urls.pop();
	}

	createIterator(): Iterator<string> {
		return new this.arrayIterator(this);
	}

	private arrayIterator = class ArrayIterator implements Iterator<string> {
		private history: BrowseHistory;
		private index: number;

		constructor(history: BrowseHistory) {
			this.history = history;
			this.index = 0;
		}

		hasNext(): boolean {
			return (this.index < this.history.urls.length);
		}

		current(): string {
			return this.history.urls[this.index];
		}

		next(): void {
			this.index++;
		}
	}
}

