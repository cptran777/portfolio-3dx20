import { helper } from '@ember/component/helper';

export function subtract(numbers: Array<number>): number {
  return numbers.reduce((difference, current) => difference - current);
}

export default helper(subtract);
