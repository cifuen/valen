import { Component } from "@angular/core";
import { Form, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

  form = this.fb.group({
    password:['', Validators.required]
  })
    
  constructor (private fb: FormBuilder, private route:Router ){

  }
  ngOnInit() {}

  listPassword: string[] = ['1111'];
  token: string='';

  pasa() {
    
    const Token = String(this.form.value.password);
    console.log(String(Token));
    this.token = Token;

    if (Token.includes(this.listPassword[0])){
      this.route.navigate(['/home']);
    }else {
      console.log('Nada que hacer')
    }
  }
}
