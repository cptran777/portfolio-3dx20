import { helper } from '@ember/component/helper';

export function abs([value]: [number]): number {
  return Math.abs(value);
}

export default helper(abs);
