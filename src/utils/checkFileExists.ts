import * as fs from 'fs';
import Paths from '../config/paths.ts'

export function checkFileExists(filePath: string): boolean {
	const homeDir: string = os.homedir();
	const pathToCheck = path.join(homeDir, ".config", "clijournal", filePath);
	const fileExists = fs.existsSync(pathToCheck);
	console.log(fileExists);
	return fileExists;
}
