import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {Plan} from '../plan';
import {PlansService} from '../plans.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-lazienkowa',
  templateUrl: './plans-show.component.html',
  styleUrls: ['./plans-show.component.css']
})
export class PlansShowComponent implements OnInit {

  plans: Plan[];
  pageNumber:number=1;
  countPerPage:number=5;
  selectedPlanId: number;
  
  constructor(private plansService: PlansService,
              private route: ActivatedRoute,
              private router: Router) {
    

   }

  ngOnInit():void {
    this.plansService.getPlansByPages(this.pageNumber,this.countPerPage)
    .subscribe(value => this.plans=value);
    
    
  }

  showDetails(x:Plan):any{
  this.selectedPlanId=x.id;
  this.router.navigate(['pokaz'], {relativeTo:this.route});
}
}

