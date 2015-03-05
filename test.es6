import assert from 'assert';
import elem  from './';

let div = elem('div')('Hello World');

it('fd-elem', () => {
  assert.equal(div.innerHTML, 'Hello World');
  assert.equal(elem('div','Test').innerHTML, 'Test');
});
