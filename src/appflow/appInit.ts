import { Paths } from '../config/paths.ts';
import { confirm } from '@inquirer/prompts';
import { DefaultMessages } from '../defaults/messages.ts';
import { ClijournalSession } from '../classes/ClijournalSession.ts';

export async function appInit(): Promise<void> {

	const answer = await confirm({
		message: DefaultMessages.welcome.firstTime,
	});

	if (answer) {
		await Paths.clijournal.createDir(true);

		const journalSession = ClijournalSession.getInstance();

	}
	process.exit(0);


}
