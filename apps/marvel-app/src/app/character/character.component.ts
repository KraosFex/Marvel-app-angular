import { Component, OnInit, Input } from '@angular/core';
import { AddToFavoritesService } from '../add-to-favorites.service';

@Component({
  selector: 'developer-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  @Input() character: any;
  constructor(private addFavorites: AddToFavoritesService) {}

  ngOnInit(): void {
    this.character;
  }

  addToFavoritesList(): void {
    this.addFavorites.favoritesTrigger.emit({
      data: this.character,
    });
    // this.character.favorite = true;
  }
}
