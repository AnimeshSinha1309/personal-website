import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { StuffComponent } from './stuff/stuff.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { LogicalagentComponent } from './illustrations/artificialintelligence/logicalagent/logicalagent.component';

@NgModule({
  declarations: [
    AppComponent,
    IllustrationsComponent,
    FriendsComponent,
    HomeComponent,
    ProjectsComponent,
    StuffComponent,
    LogicalagentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
