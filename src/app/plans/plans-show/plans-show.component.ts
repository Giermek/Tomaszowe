import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {Plan} from '../plan';
import {PlansService} from '../plans.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-lazienkowa',
  templateUrl: './plans-show.component.html',
  styleUrls: ['./plans-show.component.css'],
  
})
export class PlansShowComponent implements OnInit {

  totalCount:number;
  plans: Plan[];
  pageNumber:number=2;
  
  selectedPlanId: number;
  maxSize:number = 7;
  values: number[]=[5,10,15,20];
  countPerPage:number=this.values[0];
  
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
    this.pageNumber=event;
    this.plansService.getPlansByPages(this.pageNumber,this.countPerPage)
    .subscribe(res => {
      this.totalCount=Number(res.headers.get('X-Total-Count'));
      this.plans=res.json();
    });
  }

  onChange(event:any){
    this.countPerPage=event;
     this.plansService.getPlansByPages(this.pageNumber,this.countPerPage)
    .subscribe(res => {
      this.totalCount=Number(res.headers.get('X-Total-Count'));
      this.plans=res.json();
    });
  }

  showDetails(x:Plan):any{
  this.selectedPlanId=x.id;
  this.router.navigate(['pokaz'], {relativeTo:this.route});
}
}

