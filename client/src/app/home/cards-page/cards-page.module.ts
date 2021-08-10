import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsPageRoutingModule } from './cards-page-routing.module';
import { CardsPageComponent } from './cards-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    CardsPageComponent
  ],
    imports: [
        CommonModule,
        CardsPageRoutingModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class CardsPageModule { }
