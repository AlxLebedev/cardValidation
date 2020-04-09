import returnPaySystem from '../js/paySystems/returnPaySystem';

test.each([
  ['American Express', '371449635398431', 'american'],
  ['Diners Club', '30569309025904', 'dinersClub'],
  ['Discover', '6011111111111117', 'discover'],
  ['JCB', '3530111333300000', 'jcb'],
  ['Discover', '9991111117', null],
])(('Payment system card %s'), (_, input, expected) => {
  expect(returnPaySystem(input)).toBe(expected);
});
