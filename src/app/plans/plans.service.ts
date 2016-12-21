import {Injectable} from '@angular/core';

import {Plan} from './plan';
import {PLANS} from '../mock-plans';

@Injectable()
export class PlansService{

    

    getPlans():Plan[]{
        return PLANS;
    }

    getPlansByPages(pageNumber, countPerPage):Plan[]{
        
        return PLANS;
    }

    getPlan(){

    }
}