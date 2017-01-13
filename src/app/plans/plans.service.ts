import {Injectable} from '@angular/core';

import {Plan} from './plan';

import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlansService{

    plansUrl = 'http://localhost:3000/PLANS';
    
    constructor(private http:Http){}

    getPlansByPages(pageNumber, countPerPage):Observable<Response>{
        const start= ((pageNumber*countPerPage)-countPerPage);
        const url = `${this.plansUrl}?_start=${start}&_limit=${countPerPage}`;
        return this.http.get(url); 
    }

    getPlan(id:number):Observable<Plan>{
        const url = `${this.plansUrl}/${id}`;
        return this.http.get(url).map(res => res.json());
    }
}
