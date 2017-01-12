import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {PageNumberService} from './page-number.service';


import {AppRoutingModule} from './app-routing.module';
import {PlansModule} from './plans/plans.module';

import { AppComponent } from './app.component';
import { DomowaComponent } from './domowa/domowa.component';
import { PokojowaComponent } from './pokojowa/pokojowa.component';


@NgModule({
  declarations: [
    AppComponent,
    DomowaComponent,
    PokojowaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PlansModule
  ],
  providers: [
    PageNumberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
