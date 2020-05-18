/**
 * Brute force, inefficient implementation of a string repeater, can go back and touch up later
 * @param string - the string to be repeated
 * @param repeat - the number of times to show the string
 *
 * @example
 * buildRepeatString('ab', 1) // => 'ab';
 * buildRepeatstring('ab', 3) // => 'ababab';
 */
export default function buildRepeatString(string: string, repeat: number) {
  let newString = '';

  for (let x = 0; x < repeat; x++) {
    newString += string;
  }

  return newString;
}
