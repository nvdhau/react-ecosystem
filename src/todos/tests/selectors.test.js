/* eslint-disable no-undef */
import { expect } from 'chai';
import { getCompletedToDos } from '../selectors';

describe('The getCompletedToDos selector', () => {
  it('Return only completed todos', () => {
    const fakeTodos = [{
      text: '1',
      isCompleted: true,
    }, {
      text: '2',
      isCompleted: false,
    }, {
      text: '3',
      isCompleted: false,
    }];

    const expected = [{
      text: '1',
      isCompleted: true,
    }];

    const actual = getCompletedToDos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
