import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  ListUsersActive:any = []
  constructor(private rest:RestService, private router:AppRoutingModule) {}

  ngOnInit(): void {
    this.rest.getAPIData('http://127.0.0.1:8000/register/').subscribe((r:any)=>{
        this.ListUsersActive = r
    })
  }

  submitOnFormRegister(data:any){
    console.warn(data)
    this.rest.putAPIData('http://127.0.0.1:8000/register/', data).subscribe((r:any)=>{
      console.warn(r)
    })
    this.router.Redirect("login")
  }
  refresh(): void {
    window.location.reload();
}

}
