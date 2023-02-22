import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GuestComponent } from './pages/guest/guest.component';
import { DataService } from './pages/data.service';
import { AuthService } from './pages/services/auth.service';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { KanbanTimerComponent } from './pages/kanban-timer/kanban-timer.component';
import { SomethingComponent } from './pages/something/something.component';
import { TicTacGameComponent } from './pages/experience/pages/tic-tac-game/tic-tac-game.component'

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
    KanbanTimerComponent,
    TicTacGameComponent
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
