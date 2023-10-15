import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { LoginComponent } from "src/app/auth/login/login.component";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
     private router: Router,
     private valores:LoginComponent
     
     ) {}

  canActivate(): boolean {
    if (this.valores) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
