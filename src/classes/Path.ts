import fs from 'fs';
import os from 'os';
import path from 'path';

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

	isEmpty(): boolean {
		if (!this.exists()) return false;
		const stat = fs.statSync(this.absolutePath);
		if (!stat.isDirectory()) return false;
		const contents = fs.readdirSync(this.absolutePath);
		return contents.length === 0;
	}

	containsFile(fileName: string): boolean {
		const targetPath = path.join(this.absolutePath, fileName);
		if (!fs.existsSync(targetPath)) return false;
		return fs.statSync(targetPath).isFile();
	}

	containsDir(dirName: string): boolean {
		const targetPath = path.join(this.absolutePath, dirName);
		if (!fs.existsSync(targetPath)) return false;
		return fs.statSync(targetPath).isDirectory();
	}

	listContents(): string[] {
		if (!this.exists()) return [];
		return fs.readdirSync(this.absolutePath);
	}

	create(): void {
		if (!this.exists()) {
			fs.mkdirSync(this.absolutePath, { recursive: true });
		}
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
