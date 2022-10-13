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
      this.favoriteList.push(data);
      console.log(data);
    });
  }

  remove(id: string): void {
    this.removeElement = this.favoriteList.filter(
      (hero: any) => hero.data.id !== id
    );
    this.favoriteList = this.removeElement;
  }
}
