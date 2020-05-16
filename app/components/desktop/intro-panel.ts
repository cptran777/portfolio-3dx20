import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface DesktopIntroPanelArgs {}

const panelLabels = ['Engineer', 'Artist', 'Musician', 'Explorer', 'Gamer'];

export default class DesktopIntroPanel extends Component<DesktopIntroPanelArgs> {
  @tracked
  panelLabelIndex = 0;

  @tracked
  onDeckLabelIndex = 1;

  get panelLabel(): string {
    return panelLabels[this.panelLabelIndex];
  }

  get onDeckLabel(): string {
    return panelLabels[this.onDeckLabelIndex];
  }

  panelLabels = panelLabels;

  incrementPanelLabelIndex(): void {
    this.panelLabelIndex = (this.panelLabelIndex + 1) % panelLabels.length;
    this.onDeckLabelIndex = (this.onDeckLabelIndex + 1) % panelLabels.length;

    setTimeout(() => this.incrementPanelLabelIndex(), 3000);
  }

  @action
  onInsert(): void {
    setTimeout(() => this.incrementPanelLabelIndex(), 3000);
  }
}
