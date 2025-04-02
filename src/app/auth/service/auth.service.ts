import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManageService } from './manage.service';
import { AuthResponse } from 'src/app/model/authresponse';
import { BASE_URL, FIREBASE_SIGN_IN_URL, FIREBASE_SIGN_UP_URL, USER_ENDPOINT } from 'src/app/shared/constant/firebaseEnv';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private manageService: ManageService

  ) { }

  registerUser(user: {
    name: string,
    email: string,
    password: string,
    type: string,
  }) {
    return this.http.post<AuthResponse>(FIREBASE_SIGN_UP_URL, {
      ...user,
      returnSecureToken: true,
    })
      .pipe(
        switchMap((response) =>
          this.storedUserData(response, user.name, user.type)
        )
      );
  }

  storedUserData(authResponse: AuthResponse, name: string, type: string) {
    const userId = authResponse.localId;
    const token = authResponse.idToken;
    return this.http.put(
      `${BASE_URL}/${USER_ENDPOINT}/${userId}.json?auth=${token}`,
      {
        id: userId,
        name: name,
        email: authResponse.email,
        type: type,
      }
    );
  }
  //login user

  loginUser(user:{ email:string, password:string}) {
    return this.http.post<AuthResponse>(FIREBASE_SIGN_IN_URL,
      {
        ...user,
        returnSecureToken: true,
      })
      .pipe(switchMap((response)=> this.fetchUserData(response)));
  }

  fetchUserData(authResponse:AuthResponse) {
    const userId = authResponse.localId;
    const token = authResponse.idToken;
    return this.http.get<User>(
      `${BASE_URL}/${USER_ENDPOINT}/${userId}.json?auth=${token}`)
      .pipe(map((user)=>{
        return {...user,token,refreshToken:authResponse.refreshToken};

      }),
      tap((user:User)=>this.manageService.setUserInLocal(user))
    
    );
  
  }
  logout() {
this.manageService.logout();
  }

}
