import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const logoImageRoot = 'assets/images/';

const photos = [
  { name: 'Fullmetal Cosplay', asset: 'cosplay-fma1.jpg' },
  { name: 'Fullmetal Cosplay 2', asset: 'cosplay-fma2.jpg' },
  { name: 'Cosplay Electronics', asset: 'cosplay-electronics.jpg' },
  { name: 'Cosplay Electronics 2', asset: 'cosplay-electronics2.jpg' },
  { name: 'Cosplay Electronics 3', asset: 'cosplay-electronics3.jpg' },
  { name: 'Cosplay Electronics 4', asset: 'cosplay-electronics4.jpg' },
  { name: 'Cosplay Electronics 5', asset: 'cosplay-electronics5.jpg' },
  { name: 'Karna Cosplay', asset: 'cosplay-karna.jpg' },
  { name: 'Mandalorian In Progress', asset: 'cosplay-mando.jpg' }
].map(photo => ({
  ...photo,
  asset: `${logoImageRoot}${photo.asset}`
}));

interface DesktopInterestsPanelCosplayArgs {
  isActive: boolean;
}

export default class DesktopInterestsPanelCosplay extends Component<DesktopInterestsPanelCosplayArgs> {
  photos = photos;

  didTrigger = false;

  @tracked
  currentPhotoIndex = 0;

  updateCurrentPhoto(): void {
    if (this.args.isActive) {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % photos.length;
    }

    setTimeout(() => this.updateCurrentPhoto(), 3500);
  }

  @action
  triggerCurrentPhotoUpdate(): void {
    if (!this.didTrigger) {
      setTimeout(() => this.updateCurrentPhoto(), 3500);
      this.didTrigger = true;
    }
  }
}
