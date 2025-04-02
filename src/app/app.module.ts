import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LibrarianComponent } from './librarian/librarian.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './shared/component/nav/nav.component';
import { SigninComponent } from './auth/component/signin/signin.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/component/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LibrarianComponent,
     UserComponent,
     NavComponent,
     SignupComponent,
     SigninComponent,
     AuthComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
