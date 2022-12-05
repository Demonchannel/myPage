import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.sass']
})
export class RegistrComponent implements OnInit{
  registrForm !: FormGroup

  constructor(
    private router: Router,
    private authService: AuthService){

  }
  submitRegistr(){
    console.log('fuck u')
  }
  // submitRegistr(){
  //     this.authService.registr(this.registrForm.value).subscribe({
  //       next: ()=>this.router.navigate(['admin']),
  //       error: (err) => alert(err.message),
  //     })
  //   }

    ngOnInit(): void {
      this.registrForm = new FormGroup({
        'email': new FormControl('',[Validators.required, Validators.email]),
        'password': new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/)])
      })
    }
  }
