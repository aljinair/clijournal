import * as fs from 'fs';
import os from 'os';
import path from 'path';
import { confirm } from '@inquirer/prompts';

export async function configChecker() {

	const homeDir = os.homedir();
	const configPath = path.join(homeDir, ".config", "clijournal", "userconfig.json");
	console.log(configPath);
	if (!fs.existsSync(configPath)) {
		const answer = await confirm({ message: "I couldn't find a config file, Do you want to create a default file?" });
		if (!answer) {
			console.log("Alright, just remember that the tool won't be able to add entries until you setup your commands");
		}
	} else {
		console.log("Creating file...");
	}
}

configChecker()
