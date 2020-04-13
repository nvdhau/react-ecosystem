import { expect } from 'chai';
import { todos } from '../reducers';

describe('The todo reducer', () => {

  it('Adds a new todo when CREATE_TODO action is received', () => {

    const fakeToDo = { text: 'Hello', isComppleted: false };
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: {
        todo: fakeToDo,
      }
    };
    const originalState = { isLoading: false, data: [] };

    const expected = {
      isLoading: false,
      data: [fakeToDo],
    };

    const actual = todos(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});