import validateCardNumber from '../js/validation/validateCardNumber';

test.each([
  ['should return true for valid number', '371449635398431', true],
  ['should return false for invalid number', '371449635', false],
])(('Validate number card %s'), (_, input, expected) => {
  expect(validateCardNumber(input)).toBe(expected);
});
