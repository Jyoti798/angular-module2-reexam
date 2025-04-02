import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { ManageService } from 'src/app/auth/service/manage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,OnDestroy{
  isAuthenticated=false;
  isLibrarian=false;
  userName:string|null=null;
  private userSubscription:Subscription|null=null;

   constructor(private manageservice:ManageService,private authservice:AuthService,
    private route:Router
   ){}
ngOnInit(){
this.userSubscription=this.manageservice.user$.subscribe((user)=>{
  this.isAuthenticated=!!user;
  this.userName=user?.name||null;
  this.isLibrarian=user?.type=='librarian';
}
);
}

onLogout(){
  this.manageservice.logout();
  this.route.navigate(['/login']);
}
ngOnDestroy(): void {
  this.userSubscription?.unsubscribe();
}
}
