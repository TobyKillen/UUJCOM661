import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCreatePostComponent } from './app-create-post/app-create-post.component';
import { AppEditPostComponent } from './app-edit-post/app-edit-post.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppPostComponent } from './app-post/app-post.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppSignupComponent } from './app-signup/app-signup.component';

const routes: Routes = [
  { path: "", component: AppHomeComponent},
  { path: "home", component: AppHomeComponent},
  { path: "login", component: AppLoginComponent},
  { path: "signup", component: AppSignupComponent},
  { path: "post/:Post_ID", component: AppPostComponent},
  { path: "user/:User_ID", component: AppProfileComponent},
  { path: "profile", component: AppProfileComponent},
  { path: "create", component: AppCreatePostComponent},
  { path: "edit/:Post_ID", component: AppEditPostComponent},
  { path: "profile/:Post_ID", component: AppEditPostComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [AppHomeComponent, AppLoginComponent, AppSignupComponent]