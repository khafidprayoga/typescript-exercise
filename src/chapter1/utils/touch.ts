import fs from 'fs';
import utils from 'util';

const createFile = utils.promisify(fs.writeFile);
export default async function (path: string) {
  try {
    await createFile(path, '');
  } catch (error) {
    return error;
  }
}
