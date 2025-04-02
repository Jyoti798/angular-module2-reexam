import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { UserComponent } from './user/user.component';
import { authGuard } from './guards/auth.guard';
import { librarianGuard } from './guards/librarian.guard';
import { userGuard } from './guards/user.guard';
import { SigninComponent } from './auth/component/signin/signin.component';
import { SignupComponent } from './auth/component/signup/signup.component';
// canActivate:[authGuard,librarianGuard]
const routes: Routes = [
  
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:SigninComponent},
  {path:'register',component:SignupComponent},
  {path:'librarian', component:LibrarianComponent},
  {path:'user',component:UserComponent},
  {path:'**',redirectTo:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
