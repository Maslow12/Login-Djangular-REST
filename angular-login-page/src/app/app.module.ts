import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PostToRestComponent } from './post-to-rest/post-to-rest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ProfileComponentComponent,
    IndexComponentComponent,
    RegisterComponentComponent,
    PostToRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
