test('test', () => {
    expect(true).toBe(true);
});

test('test', () => {
    function throwError() {
        throw new Error('This is an error!');
    }
    expect(() => throwError()).toThrow('This is an error!');
});
