import fs from 'fs';
import utils from 'util';

const readFile = utils.promisify(fs.readFile);

export default async function cat(path: string) {
  try {
    let content = await readFile(path, { encoding: 'utf-8' });
    console.log(content);
  } catch (error) {
    console.error(error);
  }
}
