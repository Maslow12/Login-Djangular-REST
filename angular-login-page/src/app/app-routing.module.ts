import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

const routes: Routes = [
  {path:'', component:IndexComponentComponent},
  {path:'login', component:LoginComponentComponent},
  {path:'profile', component:ProfileComponentComponent},
  {path:'register', component:RegisterComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router:Router){
    
  }
  public Redirect(urlpath:string){
    this.router.navigate([urlpath])
  }
}
