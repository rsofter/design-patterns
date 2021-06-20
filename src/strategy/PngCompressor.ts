import { Compressor } from "./Compressor";

export class PngCompressor implements Compressor {
	compress(fileName: string) {
		console.log("Compressing using PNG");
	}
}