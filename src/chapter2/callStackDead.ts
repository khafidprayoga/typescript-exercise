import EventEmitter from 'events';

const evt = new EventEmitter();

evt.addListener('once', () => {
  console.log('event once happened');
  evt.emit('two');
});

evt.addListener('two', () => {
  console.log('event two happened');
  evt.emit('three');
});

evt.addListener('three', () => {
  console.log('event three happened');
  evt.emit('once');
});

evt.emit('once');
