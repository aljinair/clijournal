import * as fs from 'fs';
import os from 'os';
import path from 'path';
import { rawlist } from '@inquirer/prompts';

function createConfigFile(answer: String) {
	console.log(`You have selected ${answer}`);
}

export async function configChecker() {

	const homeDir = os.homedir();
	const configPath = path.join(homeDir, ".config", "clijournal", "userconfig.json");
	console.log(configPath);
	if (!fs.existsSync(configPath)) {
		const answer = await rawlist({
			message: "It look like there is not a config file yet, choose a template to start from:",
			choices: [
				{ name: 'TTRPG Journal - General', value: 'ttrpg-general' },
				{ name: 'TTRPG Journal - D&D', value: 'ttrpg-dnd' },
				{ name: 'TTRPG Journal - Daggerheart', value: 'ttrpg-daggerheart' },
			],
		});
		createConfigFile(answer);
	} else {
		return;
	}

}

configChecker()
