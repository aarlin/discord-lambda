import * as mocha from 'mocha';
import * as chai from 'chai';
import { postMessage } from './handler';
const LambdaTester = require('lambda-tester');

const expect = chai.expect;
const should = chai.should();

describe("handler", () => {
  describe("postMessage", () => {
    it("should return Testing new message", () => {
      return LambdaTester(postMessage)
        .event({content: 'Testing new message'})
        .expectResult();
    });
  });
});