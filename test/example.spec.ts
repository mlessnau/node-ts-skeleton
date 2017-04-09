import { expect } from 'chai';
import { Example } from '../../src/example';

describe('Example', () => {
  let example;

  before(() => {
    example = new Example();
  });

  describe('#test()', () => {
    it('should return "test"', () => {
      expect(example.test()).to.deep.equal('test');
    });
  });
});
