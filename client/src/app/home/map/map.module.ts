import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    GoogleMapsModule
  ]
})
export class MapModule { }
