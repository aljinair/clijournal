import * as fs from 'fs';
import os from 'os';
import path from 'path';

export function configChecker() {

	const homeDir = os.homedir();
	const configPath = path.join(homeDir, ".config", "clijournal", "userconfig.json");
	console.log(configPath);
	if (!fs.existsSync(configPath)) {
		console.error('No se encontró el archivo de configuración');
		process.exit(1);
	} else {
		console.log("Archivo de configuración encontrado");
	}
}

configChecker()
