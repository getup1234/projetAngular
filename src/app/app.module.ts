import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListeLivresComponent } from './liste-livres/liste-livres.component';
import { AjoutLivreComponent } from './ajout-livre/ajout-livre.component';
import { AppRoutingModule } from './app-routing.module';
import { MiseAJourLivreComponent } from './mise-a-jour-livre/mise-a-jour-livre.component'; // Déplacez cette ligne ici

@NgModule({
  declarations: [
    AppComponent,
    ListeLivresComponent,
    AjoutLivreComponent,
    MiseAJourLivreComponent
  ],
  imports: [
    BrowserModule,             
    FormsModule,             
    AppRoutingModule          
  ],
  providers: [],
  bootstrap: [AppComponent]    
})
export class AppModule { }
