import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface PortfolioGameDemosArgs {}

export enum Game {
  Fallout = 'fallout',
  Rocket = 'rocket'
}

/**
 * The purpose of this component is to wrap around all of the game demos as we realize that the
 * components behaving in a completely isolated manner may lead to a user trying one game and
 * then trying another while the first game is still running, making things run together in a
 * bad way
 */
export default class PortfolioGameDemos extends Component<PortfolioGameDemosArgs> {
  Game = Game;

  @tracked
  currentGame?: Game;

  @tracked
  isPlaying: boolean = false;

  @action
  playGame(gameId: Game): void {
    this.isPlaying = true;
    this.currentGame = gameId;
  }

  stopPlaying(): void {
    this.currentGame = undefined;
    this.isPlaying = false;
  }
}
