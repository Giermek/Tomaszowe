import { Component, OnInit } from '@angular/core';

import {default as Plan} from '../plan';
import {PlansService} from '../plans.service';

@Component({
  selector: 'app-lazienkowa',
  templateUrl: './lazienkowa.component.html',
  styleUrls: ['./lazienkowa.component.css']
})
export class LazienkowaComponent implements OnInit {

  plans: Plan[];

  constructor(plansService: PlansService) {
    this.plans=plansService.getPlans();
   }

  ngOnInit() {
  }

}
