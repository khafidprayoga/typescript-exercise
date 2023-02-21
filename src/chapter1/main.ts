import touch from './utils/touch';
import cat from './utils/cat';

const TouchCommands = 'touch';
const CatCommands = 'cat';

const { command, path } = {
  command: process.argv[2],
  path: process.argv[3],
};

if (command && path) {
  switch (command) {
    case TouchCommands:
      touch(path);
      break;
    case CatCommands:
      cat(path);
      break;
    default:
      console.error('unknown command');
  }
} else {
  console.error('command missing');
}
