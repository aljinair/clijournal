import { checkRootDir } from './appflow/checkRootDir.ts';
import { checkJournals } from './appflow/checkJournals.ts';

await checkRootDir();
await checkJournals();
