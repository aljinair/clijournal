import { Paths } from '../config/paths.ts';
import { confirm, input } from '@inquirer/prompts';
import { DefaultMessages } from '../defaults/messages.ts';
import path from 'path'
import fs from 'fs'

export async function checkJournals(): Promise<void> {

	if (Paths.journals.isEmpty()) {

		const answer = await confirm({
			message: "It looks like you haven't created any journals yet, would you like to create one?"
		})

		if (answer) {
			const newJournalName = await input({
				message: "Enter the name of the journal you want to create: "
			})

			const newJournalPath = path.join(Paths.journals.absolutePath, newJournalName);
			fs.mkdirSync(newJournalPath, { recursive: true });
		}
	}
}
