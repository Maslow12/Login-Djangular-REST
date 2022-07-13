import { Component, OnInit,Inject, Injectable, inject, EventEmitter, Output} from '@angular/core';
import { boolean } from 'mathjs';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from '../app-routing.module';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})

@Injectable()
export class LoginComponentComponent implements OnInit {
  constructor(private rest:RestService, private router:AppRoutingModule){ 
  }
  // Authentication
  @Output() IsAutheticate = new EventEmitter<boolean>();
  ngOnInit(): void {
  }
  submitOnLoginForm(data:any){
    this.rest.postAPIData('http://127.0.0.1:8000/api/authentication/login/', data).subscribe((r:any)=>{
        console.log(r)
        localStorage.setItem("token", r.access_token)
    })
  }

  SessionManageLocal(){
    this.IsAutheticate.emit(true)
  }
  RedirectHome(){
    this.router.Redirect("");
  }

}
