import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';

import {PlansService} from './plans.service';

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
    AppRoutingModule,
    Ng2PaginationModule
  ],
  providers: [
    PlansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
