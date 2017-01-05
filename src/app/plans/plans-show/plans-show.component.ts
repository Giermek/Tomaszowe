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

  totalCount:number;
  plans: Plan[];
  pageNumber:number=3;
  countPerPage:number=7;
  selectedPlanId: number;
  maxSize:number = 5;
  currentPage=1;
  
  constructor(private plansService: PlansService,
              private route: ActivatedRoute,
              private router: Router) {
              
              }

  ngOnInit():void {
    
    this.plansService.getPlansByPages(this.pageNumber,this.countPerPage)
    .subscribe(res => {
      this.totalCount=Number(res.headers.get('X-Total-Count'));
      this.plans=res.json();
    });
    
 }

  
  pageChanged(event:any):void {
    this.pageNumber=event.page;
    this.plansService.getPlansByPages(this.pageNumber,this.countPerPage)
    .subscribe(res => {
      this.totalCount=Number(res.headers.get('X-Total-Count'));
      this.plans=res.json();
    });
  }

  setPage(pageNo:number):number {
    this.pageNumber = pageNo;
    return this.pageNumber;
  }

  showDetails(x:Plan):any{
  this.selectedPlanId=x.id;
  this.router.navigate(['pokaz'], {relativeTo:this.route});
}
}

