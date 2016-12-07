import {Injectable} from '@angular/core';

import {PLANS} from './mock-plans';

@Injectable()
export class PlansService{

    countPerPage:number;
    pageNumber:number;

    getPlans(){
        return PLANS;
    }

    getPlansByPages(pageNumber, countPerPage){
        this.countPerPage=countPerPage;
        this.pageNumber=pageNumber;
        return PLANS;
    }
}