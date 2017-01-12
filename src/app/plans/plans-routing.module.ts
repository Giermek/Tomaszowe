import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PlansComponent} from './plans.component';
import { PlansShowComponent } from './plans-show/plans-show.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';


const plansRoutes: Routes = [
  { path: 'plany', component: PlansComponent, children:[
        {path:'', component: PlansShowComponent, children:[
            {path:'planDetail/:id', component: PlanDetailComponent},
            {path:''}
  ] }]}

];

@NgModule ({
    
    imports: [
        RouterModule.forChild(plansRoutes)

    ],
    exports:[
        RouterModule
    ]

})
export class PlansRoutingModule {}