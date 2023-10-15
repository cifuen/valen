import { Component } from "@angular/core";
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  form = this.fb.group({
    password: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private route: Router) {}
  ngOnInit() {}

  listPassword: string[] = ["valen", "juan"];
  token: string = "";

  pasa() {
    const Token = String(this.form.value.password);
    this.token = Token;

    if (this.listPassword.includes(this.token)) {
      this.route.navigate(["/home"]);
    } else {
      console.log("no");
    }
  }
}
