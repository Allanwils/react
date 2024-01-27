import {getFullYear, getFooterCopy, getLatestNotification} from './utils';


describe('getFullYear function', () => {
  test('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy function', () => {
  test('returns the correct string when argument is true', () => {
    const result = getFooterCopy(true);
    expect(result).toBe(' Holberton School');
  });

  test('returns the correct string when argument is false', () => {
    const result = getFooterCopy(false);
    expect(result).toBe(' Holberton School main dashboard');
  });
});

describe('getLatestNotification function', () => {
  test('returns a non-empty string', () => {
    const result = getLatestNotification();
    expect(result).toBeTruthy();
  });
});
