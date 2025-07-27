import { Paths } from '../config/paths.ts';
import { confirm, input } from '@inquirer/prompts';
import { DefaultMessages } from '../defaults/messages.ts';
import { createJournal } from '../utils/createJournal.ts';

export async function checkJournals(): Promise<void> {

	if (Paths.journals.isEmpty()) {

		const answer = await confirm({
			message: "It looks like you haven't created any journals yet, would you like to create one?"
		})

		if (answer) {
			createJournal();
		}

	}
}
