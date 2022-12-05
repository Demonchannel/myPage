import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit{
loginForm !: FormGroup

constructor(
  private router: Router,
  private authService: AuthService){

}

  submitLogin(){
    this.authService.login(this.loginForm.value).subscribe({
      next: ()=>this.router.navigate(['admin']),
      error: (err) => alert(err.message),
    })
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/)])
    })
  }
}
