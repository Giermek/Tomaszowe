import { Component, OnInit} from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

import {Plan} from '../plan';

import 'rxjs/add/operator/switchMap';

import {PlansService} from '../plans.service';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {

  plan:Plan;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private plansService: PlansService,
  private location: Location
) {}

ngOnInit() {
  this.route.params
    .switchMap((params: Params) => this.plansService.getPlan(+params['id']))
    .subscribe(res => this.plan = res);

  }



}


