import {Injectable} from '@angular/core';

import {Plan} from './plan';
import {PLANS} from '../mock-plans';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlansService{


    getPlansByPages(pageNumber, countPerPage){
        let plans = new Observable<Plan[]>(observer => observer.next(PLANS));
        
        return plans;
    }

    getPlan(){

    }
}