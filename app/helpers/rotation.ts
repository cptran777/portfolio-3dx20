import { helper } from '@ember/component/helper';

export function rotation([currentIndex, centerIndex, totalLength]: Array<number>): number {
  const centeredIndex = currentIndex - centerIndex;
  const distanceOfCenterFromEnd = totalLength - centerIndex;

  return centeredIndex >= -1 ? centeredIndex : currentIndex + distanceOfCenterFromEnd;
}

export default helper(rotation);
