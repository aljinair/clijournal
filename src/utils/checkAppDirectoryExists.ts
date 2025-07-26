import * as fs from 'fs';
import { Paths } from '../config/paths.ts'

export async function checkAppDirectoryExists(): Promise<void> {

	if (!Paths.clijournal.exists()) {
		await Paths.clijournal.createDir(true);
	} else {
		console.log("folder clijournal already exists");
	}
}

