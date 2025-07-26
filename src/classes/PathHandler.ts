import fs from 'fs';
import path from 'path';
import { confirm } from '@inquirer/prompts';

export class PathHandler {

	name: string;
	absolutePath: string;

	constructor(
		name: string,
		absolutePath: string,
	) {
		this.name = name;
		this.absolutePath = absolutePath;
	}

	exists(): boolean {
		return fs.existsSync(this.absolutePath);
	}

	isFile(): boolean {
		return this.exists() && fs.statSync(this.absolutePath).isFile();
	}

	isDirectory(): boolean {
		return this.exists() && fs.statSync(this.absolutePath).isDirectory();
	}

	isEmpty(): boolean {
		if (!this.exists()) return false;
		const stat = fs.statSync(this.absolutePath);
		if (!stat.isDirectory()) return false;
		const contents = fs.readdirSync(this.absolutePath);
		return contents.length === 0;
	}

	containsFile(fileName: string): boolean {
		try {
			const targetPath = path.join(this.absolutePath, fileName);
			return fs.statSync(targetPath).isFile();
		} catch {
			return false;
		}
	}

	containsDir(dirName: string): boolean {
		try {
			const targetPath = path.join(this.absolutePath, dirName);
			return fs.statSync(targetPath).isDirectory();
		} catch {
			return false;
		}
	}

	listContents(): string[] {
		if (!this.exists()) return [];
		return fs.readdirSync(this.absolutePath);
	}

	async createFile(content = "", requestConfirm: boolean): Promise<boolean> {
		if (this.exists()) return false;

		if (requestConfirm) {
			const answer = await confirm({
				message: `Do you want to create the file "${this.name}" at path "${this.absolutePath}"`,
				default: false,
			})
			if (!answer) return false;
		}
		fs.writeFileSync(this.absolutePath, content);
		console.log(`File "${this.name}" created at ${this.absolutePath}`);
		return true;
	}

	async createDir(requestConfirm: boolean): Promise<boolean> {
		if (this.exists()) return false;

		if (requestConfirm) {
			const answer = await confirm({
				message: `Do you want to create the directory "${this.name}" at path "${this.absolutePath}"`,
				default: false,
			})
			if (!answer) return false;
		}

		fs.mkdirSync(this.absolutePath, { recursive: true });
		console.log(`Directory "${this.name}" created at ${this.absolutePath}`);
		return true;
	}

	delete(): void {
		if (this.exists()) {
			const stat = fs.statSync(this.absolutePath);
			if (stat.isDirectory()) {
				fs.rmSync(this.absolutePath, { recursive: true, force: true });
			} else {
				fs.unlinkSync(this.absolutePath);
			}
		}
	}

}
