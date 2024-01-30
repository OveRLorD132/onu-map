import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.scss']
})

export class AllImages implements OnChanges {
  @Input() images! : Array<BuildingInfo>
  sortType : SortType = 'by-name';
  sortedImages : ImagesSet = {};
  names : Array<string> | undefined;
  @Output() closeOverlay = new EventEmitter<undefined>();
  hideOverlay = () => this.closeOverlay.emit();
  ngOnChanges(changes : SimpleChanges) : void {
    if(changes['images']) {
      let imagesList = changes['images'].currentValue as Array<BuildingInfo>;
      let uniqueValues : ImagesSet = {};
      imagesList.map(({ name, imageIndex }) => {
        if(!uniqueValues[name]) uniqueValues[name] = [];
        uniqueValues[name].push(imageIndex);
      });
      this.sortedImages = uniqueValues;
      this.names = Object.keys(uniqueValues);
    }
  }
  setSortType(elem : EventTarget | null) {
    let optionElement = elem as HTMLOptionElement;
    let option = optionElement.value;
    switch(option) {
      case 'Name':
        this.sortType = 'by-name';
        break;
      case 'Order':
        this.sortType = 'by-order';
        break;
      default:
        break;
    }
  }
}