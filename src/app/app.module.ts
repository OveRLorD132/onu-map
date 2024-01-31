import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BuildingCardModule } from "../components/BuildingCard/building-card.module";
import { BuildingsImagesModule } from "../components/BuildingsImages/buildings-images.module";
import { MenuElemModule } from "../components/MenuElem/menu-elem.module";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { AppComponent } from "./app.component";
import { SearchInput } from "../components/SearchInput/search-input.component";
import { AllImages } from "../components/AllImages/all-images.component";
import { MapComponent } from "../components/Map/map.component";


@NgModule({
  declarations: [
    AppComponent,
    SearchInput,
    AllImages,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BuildingCardModule,
    BuildingsImagesModule,
    MenuElemModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }