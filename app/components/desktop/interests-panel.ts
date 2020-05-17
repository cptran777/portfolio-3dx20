import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const logoImageRoot = 'assets/images/';

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

interface DesktopInterestsPanelArgs {}

export default class DesktopInterestsPanel extends Component<DesktopInterestsPanelArgs> {
  interests = interests;

  @tracked
  centerIndex = 2;

  @action
  incrementIndex(): void {
    this.centerIndex = Math.min(interests.length - 1, this.centerIndex + 1);
  }

  @action
  decrementIndex(): void {
    this.centerIndex = Math.max(0, this.centerIndex - 1);
  }
}
