import { AuditTrail } from "./AuditTrail";
import { Task } from "./Task";

export class TransferMoneyTask extends Task {
	protected doExecute(): void {
		console.log("Transfer Money")
	}
}