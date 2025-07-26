import os from 'os';
import path from 'path';
import { PathHandler } from '../classes/PathHandler.ts';

const home = os.homedir();

export const Paths = {

	clijournal: new PathHandler('clijournal', path.join(home, 'clijournal')),
	journals: new PathHandler('journals', path.join(home, 'clijournal', 'journals')),

}
