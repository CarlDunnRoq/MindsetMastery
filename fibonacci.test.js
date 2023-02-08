const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.next()).toBe(13);
});

test('When no seed, it should default to 1 and return 1', () => {
    fibonacci.init();
    expect(fibonacci.next()).toBe(1);
});
test('When initialized, it should return 2', () => {
    fibonacci.init(1)
    expect(fibonacci.next()).toBe(2);
});
test('When initialized at 2 and skipped, it should return 3', () => {
    fibonacci.init(2)
    expect(fibonacci.skip(1)).toBe(3);
});
test('When initialized at 2 and skipped with 2 as an value, it should return 5', () => {
    fibonacci.init(2)
    expect(fibonacci.skip(2)).toBe(5);
});
test('When initialized on a "non-fib" number, it should throw an error', () => {
    expect(() => {
        fibonacci.init(7);
    }).toThrow(console.error());
});
test('When initialized at 2 and skipped with a negative value, it should return 8', () => {
    fibonacci.init(13)
    expect(() => {
        fibonacci.init(-1);
    }).toThrow(console.error());
});
test('When initialized at 1 and skipped by 1, it should return 1', () => {
    fibonacci.init(1)
    expect(fibonacci.skip(1)).toBe(1);
});