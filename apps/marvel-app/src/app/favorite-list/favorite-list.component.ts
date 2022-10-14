import { Component, OnInit } from '@angular/core';
import { AddToFavoritesService } from '../add-to-favorites.service';

@Component({
  selector: 'developer-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent implements OnInit {
  constructor(private addToFavorites: AddToFavoritesService) {}

  public favoriteList: Array<any> = [];
  public removeElement: Array<any> = [];

  ngOnInit(): void {
    this.addToFavorites.favoritesTrigger.subscribe((data) => {
      if (this.favoriteList.length === 0) {
        this.favoriteList.push(data);
        return;
      }
      const elemento = this.favoriteList.find(
        (e) => e.data.character.id === data.data.character.id
      );
      if (!elemento) this.favoriteList.push(data);
    });
  }

  remove(data: any): void {
    this.removeElement = this.favoriteList.filter(
      (hero: any) => hero.data.character.id !== data.character.id
    );
    this.addToFavorites.favoritesTrigger.emit(data.character.id);
    this.favoriteList = this.removeElement;
  }
}
