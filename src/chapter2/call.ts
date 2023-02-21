import EventEmitter from 'events';

const evt = new EventEmitter();

evt.addListener('once', () => {
  setTimeout(() => {
    console.log('event once happened');
    evt.emit('two');
  }, 1000);
});

evt.addListener('two', () => {
  setTimeout(() => {
    console.log('event two happened');
    evt.emit('three');
  }, 1000);
});

evt.addListener('three', () => {
  setTimeout(() => {
    console.log('event three happened');
    evt.emit('once');
  }, 1000);
});

evt.emit('once');
