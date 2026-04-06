import '@testing-library/jest-dom';
import test from 'node:test';


test('example test', async () => {
  // Example test case
  const result = 1 + 1;
  if (result !== 2) {
    throw new Error('Test failed: 1 + 1 should equal 2');
  }
});
export default test;