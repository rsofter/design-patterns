import { Filter } from "./Filter";

export class BlackAndWhiteFilter implements Filter {
	apply(fileName: string) {
		console.log("Apply B&W");
	}
}