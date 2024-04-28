import { SignupComponent } from './signup/signup.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { GereFleuristeComponent } from './gere-fleuriste/gere-fleuriste.component';
import { AjoutFleuristeComponent } from './ajout-fleuriste/ajout-fleuriste.component';
import { ModifierFleuristComponent } from './modifier-fleurist/modifier-fleurist.component';
import { HomeComponent } from './interfaceAdmin/home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NavbarComponent } from './interfaceUser/navbar/navbar.component';
import { ConsulterFleuristeComponent } from './consulterfleuriste (4)/consulterfleuriste/consulterfleuriste.component';



export const appRoutes: Routes = [
  { path: '', component:AuthentificationComponent  },
  {path: "Home", component:HomeComponent },
  {path:"User" , component:NavbarComponent},
  {path: "signup", component:SignupComponent },
  { path: "ajout-fleuriste", component: AjoutFleuristeComponent },
  {path:"modifier-fleurist",component: ModifierFleuristComponent},
  {path:"GereFleuriste",component:GereFleuristeComponent},
  { path: "signup", component: SignupComponent},
  { path: "login", component:AuthentificationComponent },
  {path:"consulter",component:ConsulterFleuristeComponent}
];

