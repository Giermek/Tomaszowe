import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';

import {PlansService} from './plans.service';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {PlansRoutingModule} from './plans/plans-routing.module';

import { DomowaComponent } from './domowa/domowa.component';
import { PokojowaComponent } from './pokojowa/pokojowa.component';
import { PlansShowComponent } from './plans/plans-show/plans-show.component';
import { PlanDetailComponent } from './plans/plan-detail/plan-detail.component';
import { PlansComponent } from './plans/plans.component';



@NgModule({
  declarations: [
    AppComponent,
    DomowaComponent,
    PokojowaComponent,
    PlansShowComponent,
    PlanDetailComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PlansRoutingModule,
    Ng2PaginationModule
  ],
  providers: [
    PlansService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
