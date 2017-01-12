import {Injectable} from '@angular/core';
import { Subject }  from 'rxjs/Subject';

@Injectable()
export class PageNumberService{
    private pageNumberSource = new Subject<number>();

    pageNumber$ = this.pageNumberSource.asObservable();

    setPage(page:number){
        this.pageNumberSource.next(page);
    }
}
