import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
userInput={email:'', password:''};
isLoading:boolean=false;
errorMessage:string|null=null;

constructor(
  private router:Router,
  private authService:AuthService,
  private route:ActivatedRoute

){}
onSubmitClick(){
this.isLoading=true;
this.authService.loginUser(this.userInput).subscribe({
  next:(user:User)=>{
    this.isLoading=false;
    const userRole=user.type?.toLowerCase()||'default';
    this.router.navigate([`/${userRole}`]);
  },
  error:(error)=>{
    this.isLoading=false;
    this.errorMessage=error.error?.message||'Login Failed Try again';

  }

});
}

onGoToSignup(){
this.router.navigate(['/register']);
}


}
