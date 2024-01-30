import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BuildingsImages } from "./buildings-images.component";
import { BuildingCard } from "../BuildingCard/building-card.component";
import { BuildingCardModule } from "../BuildingCard/building-card.module";

@NgModule({
  declarations: [
    BuildingsImages,
    BuildingCard
  ],
  imports: [
    BrowserModule,
    BuildingCardModule
  ],
  providers: [],
  bootstrap: [BuildingsImages],
  exports: [BuildingsImages]
})

export class BuildingsImagesModule { }