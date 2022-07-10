import { Component, OnInit,Inject, Injectable, inject} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from '../app-routing.module';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers: [CookieService],
})

@Injectable()
export class LoginComponentComponent implements OnInit {
  constructor(private rest:RestService, private router:AppRoutingModule, private cookieService:CookieService){ 
  }

  ngOnInit(): void {
    //console.log(this.cookieExists)
  }
  submitOnLoginForm(data:any){
    this.rest.postAPIData('http://127.0.0.1:8000/api/authentication/login/', data).subscribe((r:any)=>{
      console.log(r)
      this.cookieService.set("token", r.access_token)
    })
  }


  RedirectHome(){
    this.router.Redirect("");
  }

}
