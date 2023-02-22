const buf = Buffer.alloc(5);

// two complement system
buf[0] = 255;
buf[1] = 256;
buf[2] = 3000;

console.log(buf[2] === buf[2] % 256);

const arrBuf = Buffer.from([1, 2, 34, 5]);
const alloc = Buffer.alloc(5, 1, 'utf-8');
console.log(arrBuf);
console.log(alloc);

const greet = Buffer.from('Hello WOrld');
console.log(greet);
console.log(greet.toString());
