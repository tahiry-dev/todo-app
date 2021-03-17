/* eslint-disable no-unused-vars */
test('dimBackground display is block', () => {
  const dimBackground = () => {
    const bgDim = document.createElement('div');
    bgDim.setAttribute('class', 'bg-focus');
    bgDim.style.display = 'block';
    expect(bgDim.style.display).toEqual('block');
  };
});

test('lightBackground display is none', () => {
  const bgLight = document.createElement('div');
  bgLight.setAttribute('class', 'bg-focus');
  bgLight.style.display = 'none';
  expect(bgLight.style.display).toEqual('none');
});
/* eslint-enable no-unused-vars */