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
  constructor(){
  }
  ngOnInit(): void{
  }
}
