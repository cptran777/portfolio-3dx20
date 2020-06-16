import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface PortfolioBoostoPanelArgs {}

export default class PortfolioBoostoPanel extends Component<PortfolioBoostoPanelArgs> {
  @tracked
  isPlayingGame = false;

  @action
  playGame() {
    this.isPlayingGame = true;
  }
}
