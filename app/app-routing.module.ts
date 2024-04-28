import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GereFleuristeComponent } from './gere-fleuriste/gere-fleuriste.component';
import { AjoutFleuristeComponent } from './ajout-fleuriste/ajout-fleuriste.component';
import { ModifierFleuristComponent } from './modifier-fleurist/modifier-fleurist.component';
import { HomeComponent } from './interfaceAdmin/home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './interfaceUser/navbar/navbar.component';
import { ConsulterFleuristeComponent } from './consulterfleuriste (4)/consulterfleuriste/consulterfleuriste.component';

const routes: Routes = [
  { path: '', component:AuthentificationComponent  },
  {path: '/Home', component:HomeComponent },
  { path: '/ajout-fleuriste', component: AjoutFleuristeComponent },
  { path: '/modifier-fleuriste', component: ModifierFleuristComponent },
    { path: '/GereFleuriste', component: GereFleuristeComponent
  },
  {path:"/User" , component:NavbarComponent},
  { path: '/signup', component: SignupComponent},
  { path: '/login', component:AuthentificationComponent },
  {path:'/consulter',component:ConsulterFleuristeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
