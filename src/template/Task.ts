import { AuditTrail } from "./AuditTrail";

export abstract class Task {
	private auditTrail: AuditTrail;

	constructor(auditTrail?: AuditTrail) {
		this.auditTrail = auditTrail ? auditTrail : new AuditTrail();
	}

	execute(): void {
		this.auditTrail.record();

		this.doExecute();
	}

	protected abstract doExecute(): void;
}