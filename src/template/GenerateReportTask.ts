import { AuditTrail } from "./AuditTrail";

export class GenerateReportTask {
	private auditTrail: AuditTrail;

	constructor(auditTrail: AuditTrail) {
		this.auditTrail = auditTrail;
	}

	execute(): void {
		this.auditTrail.record();

		console.log("Generate Report");
	}
}