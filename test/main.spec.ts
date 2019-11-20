import { add100 } from '../src/main';

// describe('add100', () => {
//   // it('should be 1 + 100 = 101', () => {
//   //   expect(add100(1)).toEqual(101);
//   // });
//   beforeAll(() => console.log('1 - beforeAll'));
//   afterAll(() => console.log('1 - afterAll'));
//   beforeEach(() => console.log('1 - beforeEach'));
//   afterEach(() => console.log('1 - afterEach'));
//   test('', () => console.log('1 - test'));
//   describe('Scoped / Nested block', () => {
//     beforeAll(() => console.log('2 - beforeAll'));
//     afterAll(() => console.log('2 - afterAll'));
//     beforeEach(() => console.log('2 - beforeEach'));
//     afterEach(() => console.log('2 - afterEach'));
//     test('', () => console.log('2 - test'));
//   });
// });
describe('1 - block', () => {
  console.log('1 - block');
  beforeAll(() => {
    console.log('1 - beforeAll');
  });
  afterAll(() => {
    console.log('1 - afterAll');
  });
  beforeEach(() => {
    console.log('1 - beforeEach');
  });
  afterEach(() => {
    console.log('1 - afterEach');
  });
  describe('2 - block', () => {
    console.log('2 - block');
    beforeAll(() => {
      console.log('2 - beforeAll');
    });
    afterAll(() => {
      console.log('2 - afterAll');
    });
    beforeEach(() => {
      console.log('2 - beforeEach');
    });
    afterEach(() => {
      console.log('2 - afterEach');
    });
    test('1 - test', () => {
      console.log('1 - test');
    });
    test('2 - test', () => {
      console.log('2 - test');
    });
  });
});
