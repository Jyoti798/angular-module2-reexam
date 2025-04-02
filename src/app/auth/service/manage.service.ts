import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
private USER_TOKEN='USER_DATA';
private userSubject=new BehaviorSubject<User|undefined>(this.getUserFromLocal());
user$=this.userSubject.asObservable();


getUser():User|undefined{
return this.userSubject.value;
}

getUserId():string|undefined{
  return this.userSubject.value?.id;
  }
  

getUserFromLocal():User|undefined{
  const data=localStorage.getItem(this.USER_TOKEN);
  return data?JSON.parse(data):undefined;
}
  
  setUserInLocal(user:User){
this.userSubject.next(user);
localStorage.setItem(this.USER_TOKEN,JSON.stringify(user));
  }
  logout(){
this.userSubject.next(undefined);
localStorage.removeItem(this.USER_TOKEN);
  }
}
