import { Routes } from '@angular/router'
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProjectsImagesComponent } from './projects-images/projects-images.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';


export const appRoutes: Routes = [
    { path: 'projectslist', component: ProjectsListComponent, canActivate:[AuthGuard] },
    { path: 'forbidden', component: ForbiddenComponent, canActivate:[AuthGuard] },
    { path: 'userslist', component: UserComponent, canActivate:[AuthGuard] },
    { path: 'adminPanel', component: AdminPanelComponent, canActivate:[AuthGuard] ,data : {roles:['Admin']}},
    // {
    //     path: 'signup', component: UserComponent,
    //     children: [{ path: '', component: SignUpComponent }]
    // },

    // {
    //     path: 'login', component: UserComponent,
    //     children: [{ path: '', component: SignInComponent }]
    // },
    { path: 'signup', component: SignUpComponent, canActivate:[AuthGuard] },
    { path: 'login', component: SignInComponent, canActivate:[AuthGuard] },

   {   path : '', redirectTo:'login', pathMatch: 'full'},
   { path: 'image/:id', component: ProjectsImagesComponent, canActivate:[AuthGuard] },
   { path: 'floorPlan/:id', component: FloorPlanComponent, canActivate:[AuthGuard] }

];