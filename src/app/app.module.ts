import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import { DomowaComponent } from './domowa/domowa.component';
import { PokojowaComponent } from './pokojowa/pokojowa.component';
import { LazienkowaComponent } from './lazienkowa/lazienkowa.component';



@NgModule({
  declarations: [
    AppComponent,
    DomowaComponent,
    PokojowaComponent,
    LazienkowaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
