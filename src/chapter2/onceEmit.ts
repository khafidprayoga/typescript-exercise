import EventEmitter from 'events';

class CustomEvt extends EventEmitter {
  private counter: number = 1;
  public getCounter(): number {
    return this.counter;
  }
}

const event = new CustomEvt();

event.once('increment', () => {
  console.log(event.getCounter());
});

event.emit('increment');
event.emit('increment');
event.emit('increment');
event.emit('increment');
