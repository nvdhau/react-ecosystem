/* eslint-disable no-undef */
import { expect } from 'chai';
import { getBorderStyleForDate } from '../ToDoListItem';

describe('getBorderStyleForDate', () => {
  it('return none when date is less than five days ago', () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 3);

    const expected = 'none';
    const actual = getBorderStyleForDate(recentDate, today);

    expect(actual).equal(expected);
  });

  it('return a border when date is more than five days ago', () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 7);

    const expected = '2px solid red';
    const actual = getBorderStyleForDate(recentDate, today);

    expect(actual).equal(expected);
  });
});
