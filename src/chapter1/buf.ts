import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

(async () => {
  try {
    let data = await readFile('./newFile.txt');
    console.log(data instanceof Buffer);
    console.log(data.toString());
  } catch (error) {
    console.error(error);
  }
})();
