import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


export const appRoutes: Routes = [
    { path: 'projectslist', component: ProjectsListComponent, canActivate:[AuthGuard] },
    { path: 'adminPanel', component: AdminPanelComponent, canActivate:[AuthGuard] },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },

    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
   {   path : '', redirectTo:'login', pathMatch: 'full'}


];