import { StringDecoder } from 'string_decoder';

const decode = new StringDecoder('utf-8');
const buffers = [
  Buffer.from('Hello '),
  Buffer.from([0b11110000, 0b10011111]),
  Buffer.from([0b10001100, 0b10001110]),
  Buffer.from(' world!'),
];

console.log(buffers.toString());

const output = buffers.reduce(
  (result, buffer) => `${result}${decode.write(buffer)}`,
  ''
);
console.log(output);
