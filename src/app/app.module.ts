import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BuildingCardModule } from "../components/BuildingCard/building-card.module";
import { BuildingsImagesModule } from "../components/BuildingsImages/buildings-images.module";
import { MenuElemModule } from "../components/MenuElem/menu-elem.module";

import { AppComponent } from "./app.component";
import { SearchInput } from "../components/SearchInput/search-input.component";
import { AllImages } from "../components/AllImages/all-images.component";


@NgModule({
  declarations: [
    AppComponent,
    SearchInput,
    AllImages
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BuildingCardModule,
    BuildingsImagesModule,
    MenuElemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }