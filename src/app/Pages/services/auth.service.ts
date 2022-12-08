import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private fireAuth: AngularFireAuth) { }

  setToken(token: string){
    localStorage.setItem('token', token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    return this.getToken() !==null;
  }

//   login(userInfo :{email: string, password: string}): Observable<string | boolean>{
//     if(userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin123'){
//       this.setToken('asdgasdfgasdf')
//       return of(true)
//     }
//     return throwError(()=>{new Error('Failed login')})
// }
  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then (
      ()=>{
        localStorage.setItem('token', 'true');
        this.router.navigate(['dashboard']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    )
  }


  registr(email:string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(
      () => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      }, err =>{
        alert(err.message);
        this.router.navigate(['/register']);
      }
    )

  }

  //sign out

  logout(){
    this.fireAuth.signOut().then(
      ()=>{
    localStorage.removeItem('token');
      this.router.navigate(['/login']);
      },err =>{
        alert(err.message)
      }
    )
  }
}
