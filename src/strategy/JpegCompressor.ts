import { Compressor } from "./Compressor";

export class JpegCompressor implements Compressor {
	compress(fileName: string) {
		console.log("Compressing using JPEG");
	}
}