import { Component } from "@angular/core";
import { Route, Router } from "@angular/router";
import { LoginComponent } from "src/app/auth/login/login.component";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  constructor(private route:Router){}
  Titulo = ''
  

}
