import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { GuestComponent } from './Pages/guest/guest.component';
import { LoginComponent } from './Pages/login/login.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { RegistrComponent } from './Pages/registr/registr.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'guest', component: GuestComponent},
  { path: 'experience', component: ExperienceComponent  },
  { path: 'login', component: LoginComponent},
  { path: 'reg', component: RegistrComponent},
  { path: '**', component: NotFoundComponent},
  {path: 'aboutMe', component: AboutMeComponent}
  // { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
