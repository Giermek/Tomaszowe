import { Component, OnInit } from '@angular/core';

import {Plan} from '../../plan';
import {PlansService} from '../../plans.service';

@Component({
  selector: 'app-lazienkowa',
  templateUrl: './plans-show.component.html',
  styleUrls: ['./plans-show.component.css']
})
export class PlansShowComponent implements OnInit {

  plans: Plan[];
  p:number;
  
  constructor(private plansService: PlansService) {
    this.plans=plansService.getPlansByPages(1,7);
    this.p=this.plansService.pageNumber;

   }

  ngOnInit() {
    
    
  }
showDetails(x):any{
  
}
}
