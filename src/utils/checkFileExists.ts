import * as fs from 'fs';
import os from 'os';
import path from 'path';

export function checkFileExists(filePath: string): boolean {
	const homeDir: string = os.homedir();
	const pathToCheck = path.join(homeDir, ".config", "clijournal", filePath);
	const fileExists = fs.existsSync(pathToCheck);
	console.log(fileExists);
	return fileExists;
}
