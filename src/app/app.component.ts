import { Component} from '@angular/core';
import './rxjs-operators';
import {Router} from '@angular/router';

import {PageNumberService} from './page-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private startingPage:number=1;

  constructor(private router:Router,
              private pageNumberService: PageNumberService){
                pageNumberService.pageNumber$.subscribe(
                  page => this.startingPage=page
                );
              }
  go(){
    this.router.navigate(['/plany',{id: this.startingPage}]);
  }
}
