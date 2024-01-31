import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, Output, EventEmitter } from "@angular/core";

import { BuildingInfo } from "../..";

@Component({
  selector: 'building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.scss'],
  animations: [
    trigger('showOverlay', [
      state('void', style({ backgroundColor: "rgb(255, 255, 255, 0)"})),
      state('*', style({ backgroundColor: "rgb(255, 255, 255, 0.8)" })),
      transition(':enter', [animate('0.2s')]),
      transition(':leave', [animate('0.1s')])
    ])
  ]
})

export class BuildingCard {
  @Input() buildingInfo! : BuildingInfo;
  @Output() imageLoaded = new EventEmitter<undefined>();
  isHovered = false;
  showOverlay = () => this.isHovered = true;
  hideOverlay = () => this.isHovered = false;
  emitLoaded() {
    this.imageLoaded.emit();
  }
}