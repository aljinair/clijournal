import { Paths } from '../config/paths.ts';
import { input } from '@inquirer/prompts';
import path from 'path';
import fs from 'fs';

export async function createJournal() {

	const newJournalName = await input({
		message: "Enter the name of the journal you want to create: "
	})

	if (Paths.journals.containsDir(newJournalName)) {
		console.log("A journal with that name already exists, pick a different one");
		createJournal()
	} else {

		const newJournalPath = path.join(Paths.journals.absolutePath, newJournalName);
		fs.mkdirSync(newJournalPath, { recursive: true });

	}
}
