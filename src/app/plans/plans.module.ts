import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule} from '@angular/forms';

import { PaginationModule } from 'ng2-bootstrap/components/pagination';

import {PlansService} from './plans.service';

import {PlansRoutingModule} from './plans-routing.module';

import { PlansShowComponent } from './plans-show/plans-show.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { PlansComponent } from './plans.component';

@NgModule({
    declarations:[
        PlansShowComponent,
        PlanDetailComponent,
        PlansComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        PlansRoutingModule,
        PaginationModule        
    ],
    providers:[
        PlansService
    ]
})

export class PlansModule{}