import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ListExercisesComponent } from './list-exercises/List-exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';


//welcome
const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent , canActivate:[RouteGuardService]},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'list/exercise', component: ListExercisesComponent , canActivate:[RouteGuardService] },
  { path: 'list/exercise/:messageSuccess', component: ListExercisesComponent , canActivate:[RouteGuardService] },
  { path: 'exercise/:id', component: ExerciseComponent, canActivate:[RouteGuardService]  },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
