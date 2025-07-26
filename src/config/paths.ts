import os from 'os';
import path from 'path';

const home = os.homedir();

export const Paths = {

	home,
	clijournal: path.join(home, "clijournal"),
	journals: path.join(home, "clijournal", "journals"),

}
