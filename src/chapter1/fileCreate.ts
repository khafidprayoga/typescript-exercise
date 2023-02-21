import fs from 'fs';
import utils from 'util';

const writeFilePromisify = utils.promisify(fs.writeFile);
fs.writeFile('./newFile.txt', 'data', null, (error: unknown) => {
  console.log(error);
});

writeFilePromisify('./promiseData.txt', 'data new')
  .then(() => {
    console.log('file create success with promise');
  })
  .catch((err) => {
    console.error(err);
  });
