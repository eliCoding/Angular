import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { UserService } from './shared/user.service';
import { UserComponent } from './user/user.component';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {NgbModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsImagesComponent } from './projects-images/projects-images.component';
import { ImageService } from './shared/image.service';
import { ImageFilterPipe } from './shared/filter.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    ProjectsListComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    NavbarComponent,
    ProjectsImagesComponent,
    ImageFilterPipe
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    NgbAlertModule,
    AngularFontAwesomeModule
    
  ],
  providers: [UserService,AuthGuard,
    ,{

      provide:HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    },ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
