import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LogicalagentComponent } from './illustrations/artificialintelligence/logicalagent/logicalagent.component';
import { MoleculeRenderComponent } from './illustrations/molecularchemistry/moleculerender/moleculerender.component';
import { NotesComponent } from './notes/notes.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './users/profile/profile.component';
import { VaeComponent } from './illustrations/artificialintelligence/vae/vae.component';


@NgModule({
  declarations: [
    AppComponent,
    IllustrationsComponent,
    FriendsComponent,
    HomeComponent,
    ProjectsComponent,
    ProfileComponent,
    // The submodules being rendered
    LogicalagentComponent,
    MoleculeRenderComponent,
    NotesComponent,
    BlogComponent,
    VaeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
