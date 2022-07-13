import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],

})
export class AppComponent {
  title = 'angular-login-page';
  Is_Authenticated:boolean = false
  constructor(){
  }
  ngOnInit(): void{
  }
  Verification(e:any){
    this.Is_Authenticated = e
  }
}
