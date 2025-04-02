import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ManageService } from "../auth/service/manage.service";

export const authGuard :CanActivateFn=()=>{
    const route=inject(Router);
    const managerServices=inject(ManageService);
     const user=managerServices.getUser();
     if(user) return true;
      return route.createUrlTree(['/login']);

    
}