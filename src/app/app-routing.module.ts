import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { GuestComponent } from './pages/guest/guest.component';
import { KanbanTimerComponent } from './pages/kanban-timer/kanban-timer.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TicTacGameComponent } from './pages/experience/pages/tic-tac-game/tic-tac-game.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'guest', component: GuestComponent},
  { path: 'experience', component: ExperienceComponent  },
  { path: 'login', component: LoginComponent},
  {path: 'aboutMe', component: AboutMeComponent},
  {path: 'kanbanTimer', component: KanbanTimerComponent},
  { path: '**', component: NotFoundComponent},
  { path: 'experience/tictacgame', component: TicTacGameComponent},
  // { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
