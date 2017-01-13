import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PageNumberService{

    private pageNumberSource: BehaviorSubject<number> = new BehaviorSubject(1);

    pageNumber$: Observable<number> = this.pageNumberSource.asObservable();

    setPage(page:number){
        this.pageNumberSource.next(page);
    }

}
