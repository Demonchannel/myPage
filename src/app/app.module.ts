import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { LoginComponent } from './Pages/login/login.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { GuestComponent } from './Pages/guest/guest.component';
import { DataService } from './Pages/data.service';
import { AuthService } from './Pages/services/auth.service';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { KanbanTimerComponent } from './Pages/kanban-timer/kanban-timer.component';
import { SomethingComponent } from './Pages/something/something.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ExperienceComponent,
    LoginComponent,
    NotFoundComponent,
    GuestComponent,
    KanbanTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
