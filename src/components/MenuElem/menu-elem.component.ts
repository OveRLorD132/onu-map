import { Component, Input, ViewChild, ElementRef } from "@angular/core";
@Component({
  selector: 'menu-elem',
  templateUrl: './menu-elem.component.html',
  styleUrls: ['./menu-elem.component.scss'],
})

export class MenuElem {
  @Input() menuStrip!: MenuStrip;
  @Input() index!: number;
  @Input() lastIndex! : number;
  @Input() nestingLevel! : number;
  isOpened = false;
  showElems(event : MouseEvent) {
    this.isOpened = true
    event.stopPropagation();
  }
  hideElems(event : MouseEvent) {
    //let relatedTarget = event.relatedTarget as HTMLElement;
    //if(relatedTarget && relatedTarget.contains(event.target as HTMLElement)) return;
    this.isOpened = false;
    event.stopPropagation();
  }
}

