import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const logoImageRoot = 'assets/images/';
const componentNameRoot = 'desktop/interests-panel/';

const interests = [
  { name: 'Gaming', asset: 'controller.png' },
  { name: 'Game Development', asset: 'unity3.png' },
  { name: 'Virtual Reality', asset: 'vr.png' },
  { name: 'Artificial Intelligence', asset: 'ai.png' },
  { name: 'Continuing Education', asset: 'upenn.png' },
  { name: 'Cosplay', asset: 'cosplay.png' },
  { name: 'Music', asset: 'headphones.png' }
].map(interest => ({
  ...interest,
  asset: `${logoImageRoot}logo-${interest.asset}`
}));

const interestsComponentMap: Record<string, string> = {
  'Gaming': 'gaming',
  'Game Development': 'game-dev',
  'Virtual Reality': 'virtual-reality',
  'Artificial Intelligence': 'ai',
  'Continuing Education': 'upenn',
  'Cosplay': 'cosplay',
  'Music': 'music'
};

interface DesktopInterestsPanelArgs {}

export default class DesktopInterestsPanel extends Component<DesktopInterestsPanelArgs> {
  interests = interests;

  @tracked
  centerIndex = 2;

  @tracked
  activeIndex = 2;

  get interestComponents(): Array<string> {
    return Object.values(interestsComponentMap).map(entry => `${componentNameRoot}${entry}`);
  }

  get currentComponent(): string {
    const currentInterest = interests[this.activeIndex];
    return `${componentNameRoot}${interestsComponentMap[currentInterest.name]}`
  }

  noop(): void {}

  @action
  incrementIndex(): void {
    this.centerIndex = Math.min(interests.length - 1, this.centerIndex + 1);
  }

  @action
  decrementIndex(): void {
    this.centerIndex = Math.max(0, this.centerIndex - 1);
  }

  @action
  setActiveIndex(newIndex: number): void {
    if (Math.abs(this.centerIndex - newIndex) < 3) {
      this.centerIndex = newIndex;
      this.activeIndex = newIndex;
    }
  }

  @action
  setNewIndex(newIndex: number): void {
    this.centerIndex = newIndex;
  }
}
