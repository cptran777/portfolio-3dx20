import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const logoImageRoot = '/assets/images/';

const games = [
  { name: 'Skyrim', asset: 'skyrim.jpg' },
  { name: 'Final Fantasy 7', asset: 'ff7.jpg' },
  { name: 'Tales of Berseria', asset: 'tales.jpeg' },
  { name: 'Overwatch', asset: 'overwatch.jpg' },
  { name: 'Vader Immortal', asset: 'vader-immortal.jpg' },
  { name: 'Animal Crossing', asset: 'animal-crossing.jpg' },
  { name: 'Fire Emblem', asset: 'fire-emblem.jpg' },
  { name: 'Fate Grand Order', asset: 'fgo.jpg' }
].map(game => ({
  ...game,
  asset: `${logoImageRoot}${game.asset}`
}));
interface DesktopInterestsPanelGamingArgs {
  // Whether or not this panel is the active one in the user vision
  isActive: boolean;
}

export default class DesktopInterestsPanelGaming extends Component<DesktopInterestsPanelGamingArgs> {
  games = games;

  @tracked
  currentGameIndex = 0;

  updateCurrentGame(): void {
    if (this.args.isActive) {
      this.currentGameIndex = (this.currentGameIndex + 1) % games.length;
    }

    setTimeout(() => this.updateCurrentGame(), 2500);
  }

  @action
  triggerCurrentGameUpdate(): void {
    setTimeout(() => this.updateCurrentGame(), 2500);
  }
}
