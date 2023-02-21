import EventEmitter from 'events';
const evt = new EventEmitter();

evt.on('click', () => {
  console.log('new click event happend');
});

evt.addListener('HTTPResponse', (code: number, data: any, extra: any) => {
  let val = JSON.stringify(data, null, '\t');
  console.log(`Got response ${code} code, with json values \n${val}`);
});

evt.emit('click');
evt.emit('HTTPResponse', 200, { hello: 'world' });
evt.removeListener('click');
evt.emit('click');
