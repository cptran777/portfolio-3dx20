import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface PortfolioFalloutTerminalArgs {}

export default class PortfolioFalloutTerminal extends Component<PortfolioFalloutTerminalArgs> {
  @tracked
  isPlayingGame = false;

  @action
  playGame() {
    this.isPlayingGame = true;
  }
}
