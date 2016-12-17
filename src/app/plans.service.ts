import {Injectable} from '@angular/core';

import {Plan} from './plan';
import {PLANS} from './mock-plans';

@Injectable()
export class PlansService{

    countPerPage:number;
    pageNumber:number;

    getPlans(){
        return PLANS;
    }

    getPlansByPages(pageNumber, countPerPage):Plan[]{
        this.countPerPage=countPerPage;
        this.pageNumber=pageNumber;
        return PLANS;
    }
}