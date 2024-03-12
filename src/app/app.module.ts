import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    NewClientComponent,
    ClientsListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
