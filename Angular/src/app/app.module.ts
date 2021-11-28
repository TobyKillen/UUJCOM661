import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponets } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppSignupComponent } from './app-signup/app-signup.component';

import { WebService } from './web.service';
import { AuthModule } from '@auth0/auth0-angular';
import { AppPostComponent } from './app-post/app-post.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppCreatePostComponent } from './app-create-post/app-create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppEditPostComponent } from './app-edit-post/app-edit-post.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponets,
    AppLoginComponent,
    AppSignupComponent,
    AppPostComponent,
    AppProfileComponent,
    AppCreatePostComponent,
    AppEditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    AuthModule.forRoot( {
      domain: 'dev-84px7oyo.eu.auth0.com',
      clientId: 'DQOyiNOmR9TcJH4GeZPFAyeTU11f0Uee'
    }),
    ReactiveFormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
