import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MenuElem } from "./menu-elem.component";

@NgModule({
  declarations: [
    MenuElem
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [MenuElem],
  exports: [MenuElem]
})

export class MenuElemModule { }