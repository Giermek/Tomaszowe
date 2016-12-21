import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {PlansService} from '../plans.service';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private service: PlansService,
  private location: Location
) {}

  ngOnInit() {
  }

}
