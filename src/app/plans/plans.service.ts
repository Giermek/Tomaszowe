import {Injectable} from '@angular/core';

import {Plan} from './plan';
import {PLANS} from '../mock-plans';

import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlansService{

    

    private plansUrl = 'http://localhost:3000/PLANS';

    constructor(private http:Http){}

    getPlansByPages(pageNumber, countPerPage){
        const start= ((pageNumber*countPerPage)-countPerPage);
        const url = `${this.plansUrl}?_start=${start}&_limit=${countPerPage}`;
        return this.http.get(url);  
    }

    getPlan(){
let plans = PLANS;
        let filteredPlans = plans;
        return new Observable<Plan[]>(observer => observer.next(filteredPlans));
    }
}
