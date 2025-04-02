import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userInput={ name:'',  email:'', password:'', type:''};
isLoading:boolean=false;
errorMessage:string|null=null;
 constructor(
   private router:Router,
   private authService:AuthService,
   private route:ActivatedRoute
 
 ){}

  onSubmit(){
this.isLoading=true;
this.errorMessage=null;
this.authService.registerUser(this.userInput).subscribe({
  next:()=>{
    this.isLoading=false;
    this.router.navigate(['/login']);
  },
  error:(error)=>{
    this.isLoading=false;
    this.errorMessage=error.error?.message||'Registration Failed Try again';

  },
});
  }

  onGoToLogin(){
    this.router.navigate(['/login']);
  }
}
