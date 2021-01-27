import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LoginserviceService } from './loginservice/loginservice.service';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin/welcomeadmin.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'/login',
    pathMatch:'full'
  }
  ,{
     path:'login' , 
     component:LoginComponent
  }, 
  {
      path:'welcome' ,  
      component:WelcomeadminComponent   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
