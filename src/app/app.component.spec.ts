describe('AppComponent', () => {
  it('should create the app', () => {
    let foo = 'bar';
    foo = 1;
    expect(foo).toBe(1);

    expect(document.createElement('div')).toBeInstanceOf(HTMLDivElement);
  });
});
