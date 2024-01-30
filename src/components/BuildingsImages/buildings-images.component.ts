import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'buildings-images',
  templateUrl: './buildings-images.component.html',
  styleUrls: ['./buildings-images.component.scss']
})

export class BuildingsImages {
  @Input() buildings! : Array<BuildingInfo>
  @Output() showImages = new EventEmitter<undefined>();
  scrolledSide : ScrolledSide = 'left';
  showImagesDialog() {
    this.showImages.emit();
  }
  scrollElement(flag : boolean) : void {
    let elem = document.getElementById('buildingsCont') as HTMLElement
    if(elem.offsetWidth === elem.scrollWidth) return;
    if(flag) {
      elem.scrollLeft += 500;
      if(elem.offsetWidth + elem.scrollLeft + 500 >= elem.scrollWidth) this.scrolledSide = 'right'; 
      else this.scrolledSide = 'none';
    } 
    else {
      elem.scrollLeft -= 500;
      if(elem.scrollLeft - 500 <= 0) this.scrolledSide = 'left';
      else this.scrolledSide = 'none';
    } 

  }
  setScroll() {
    let element = document.getElementById('buildingsCont') as HTMLElement;
    console.log('loaded')
    if(element.offsetWidth === element.scrollWidth) this.scrolledSide = 'no-scroll';
  }
}