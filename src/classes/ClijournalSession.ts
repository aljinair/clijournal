/*
 import { CommandList } from './CommandList.ts';

export class ClijournalSession {

	private static instance: ClijournalSession;
	private readonly startDate: Date;
	private journal!: string;
	private commands!: CommandList;

	constructor() {
		this.startDate = new Date();
	}

	static getInstance(): ClijournalSession {
		if (!ClijournalSession.instance) {
			ClijournalSession.instance = new ClijournalSession();
		}
		return ClijournalSession.instance;
	}

	public getStartDate(): Date {
		return this.startDate;
	}

	public getJournal(): string {
		return this.journal;
	}

	public getCommands(): object {
		return this.commands;
	}

	public setJournal(journal: string) {
		this.journal = journal;
	}

	public setCommands(commands: CommandList) {
		this.commands = commands;
	}

}
*/
