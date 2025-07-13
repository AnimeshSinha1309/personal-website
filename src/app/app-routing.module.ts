import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { FriendsComponent } from './friends/friends.component'
import { IllustrationsComponent } from './illustrations/illustrations.component'
import { ProjectsComponent } from './projects/projects.component'
import { ProfileComponent } from './users/profile/profile.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'illustrations', component: IllustrationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
