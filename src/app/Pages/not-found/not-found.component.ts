import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {
        constructor(private authService: AuthService){

        }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  logOut(){
    this.authService.logout()
  }
}
