import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';
import { HomeComponent } from '@src/app/public/home/home.component';
import { LoginErrorComponent } from '@src/app/public/login-error/login-error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
