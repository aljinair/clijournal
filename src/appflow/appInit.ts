import { checkAppDirectoryExists } from '../utils/checkAppDirectoryExists.ts';

export async function appInit(): Promise<void> {

	checkAppDirectoryExists();
}
