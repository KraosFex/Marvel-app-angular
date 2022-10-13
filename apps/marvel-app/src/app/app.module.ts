import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'character/:id', component: CharacterDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersListComponent,
    FavoriteListComponent,
    HomeComponent,
    CharacterDetailComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
