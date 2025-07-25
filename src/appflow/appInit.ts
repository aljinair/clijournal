import os from 'os';
import path from 'path';
import * as fs from 'fs';
import { checkFileExists } from '../utils/checkFileExists.ts';
import { confirm } from '@inquirer/prompts';

export async function appInit(): Promise<void> {

	const cliDirExists = checkFileExists("");
	if (!cliDirExists) {
		const answer = await confirm({
			message: "We couldn't find a config folder for clijournal, do you wish to create one?: "
		})

		if (answer) {
			const homeDir = os.homedir();
			const configDir = path.join(homeDir, ".config", "clijournal");
			fs.mkdirSync(configDir, { recursive: true });

		}
		process.exit(0);
	}
}

appInit();
