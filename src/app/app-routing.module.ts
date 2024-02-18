import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsManagementComponent } from './components/news-management/news-management.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent},
  { path: 'news-managment', component: NewsManagementComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
