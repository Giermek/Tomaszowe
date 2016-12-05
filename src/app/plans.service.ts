import {Injectable} from '@angular/core';

import {PLANS} from './mock-plans';

@Injectable()
export class PlansService{
    getPlans(){
        return PLANS;
    }
}