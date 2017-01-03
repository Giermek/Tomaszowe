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

  totalCount;
  plans: Plan[];
  defaultPageNumber:number=1;
  pageNumber:number=this.defaultPageNumber;
  countPerPage:number=5;
  selectedPlanId: number;
  
  constructor(private plansService: PlansService,
              private route: ActivatedRoute,
              private router: Router) {
    

   }

  ngOnInit():void {
    this.plansService.getPlansByPages(this.pageNumber,this.countPerPage)
    .subscribe(res => {
      
      let headers=res.headers;
      this.totalCount = headers.get('X-Total-Count');
      let pl = res.json();
      this.plans=pl;
      
    });
  }

  onEnter(value: number) { this.pageNumber = value; }

  showDetails(x:Plan):any{
  this.selectedPlanId=x.id;
  this.router.navigate(['pokaz'], {relativeTo:this.route});
}
}

