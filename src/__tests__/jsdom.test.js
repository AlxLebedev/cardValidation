import Main from '../js/main';

test('should render murkup from main class', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const mainClass = new Main(container);

  mainClass.init();

  expect(container.innerHTML).toEqual(Main.markup);
});

test('should add .valid class to input field', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const mainClass = new Main(container);

  mainClass.init();

  const inputField = container.querySelector('[id=input]');
  inputField.value = '371449635398431';
  const form = container.querySelector('.card-validation-form');
  form.submit();

  expect(inputField.classList.contains('valid')).toBeTruthy();
});

test('should add .invalid class to input field', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const mainClass = new Main(container);

  mainClass.init();

  const inputField = container.querySelector('[id=input]');
  inputField.value = '371449635';
  const form = container.querySelector('.card-validation-form');
  form.submit();

  expect(inputField.classList.contains('invalid')).toBeTruthy();
});
