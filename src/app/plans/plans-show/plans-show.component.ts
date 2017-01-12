import { Component, OnInit, OnDestroy } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

import {Plan} from '../plan';
import {PlansService} from '../plans.service';
import {PageNumberService} from '../../page-number.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-lazienkowa',
  templateUrl: './plans-show.component.html',
  styleUrls: ['./plans-show.component.css'],
  
})
export class PlansShowComponent implements OnInit, OnDestroy {

  totalCount:number;
  plans: Plan[];
  pageNumber:number;
  num:number;
  maxSize:number = 7;
  values: number[]=[5,10,15,20];
  countPerPage:number=this.values[0];
  
  constructor(private plansService: PlansService,
              private route: ActivatedRoute,
              private router: Router,
              private pageNumberService:PageNumberService) {
              
              }

  ngOnInit() {
  
  this.route.params.subscribe((params: Params) => {
    this.pageNumber = +params['id'];
    this.num = this.pageNumber ? this.pageNumber : 1;
    });

  this.plansService.getPlansByPages(this.num,this.countPerPage)
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

  onSelect(event:any){
    this.countPerPage=event;
    this.plansService.getPlansByPages(this.pageNumber,this.countPerPage)
    .subscribe(res => {
      this.totalCount=Number(res.headers.get('X-Total-Count'));
      this.plans=res.json();
    });
  }

  showDetails(plan:Plan):any{
  
  this.router.navigate(['planDetail', plan.id], {relativeTo:this.route});
}

ngOnDestroy(){
  this.pageNumberService.setPage(this.pageNumber);
}

}

