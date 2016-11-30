import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DomowaComponent } from './domowa/domowa.component';
import { PokojowaComponent } from './pokojowa/pokojowa.component';
import { LazienkowaComponent } from './lazienkowa/lazienkowa.component';

const appRoutes: Routes = [
  { path: 'strona-domowa', component: DomowaComponent },
  { path: 'strona-pokojowa', component: PokojowaComponent },
  { path: 'strona-lazienkowa', component: LazienkowaComponent },
  {path: '', component: DomowaComponent}

];

@NgModule ({
    
    imports: [
        RouterModule.forRoot(appRoutes)

    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule {}