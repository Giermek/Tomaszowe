import { Component, OnInit } from '@angular/core';

import {Plan} from '../plan';
import {PlansService} from '../plans.service';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
