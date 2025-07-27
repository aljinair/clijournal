import { Paths } from '../config/paths.ts';
import { confirm } from '@inquirer/prompts';
import { DefaultMessages } from '../defaults/messages.ts';

export async function checkRootDir(): Promise<void> {

	if (!Paths.clijournal.exists()) {
		const answer = await confirm({
			message: DefaultMessages.welcome.firstTime,
		});

		if (answer) {
			await Paths.clijournal.createDir(true);
			await Paths.journals.createDir(true);
			console.log("Necessary directories successfully created");
		}
	}
	console.log("App root directory loaded succesfully")

}
