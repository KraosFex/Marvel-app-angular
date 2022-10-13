import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';
import { AddToFavoritesService } from '../add-to-favorites.service';

@Component({
  selector: 'developer-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  constructor(private characterSVC: RestService) {}
  public allCharacters: Observable<any> = this.characterSVC.getAllCharacters();

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters;
  }

  // addFavorites() {
  //   this.addToFavorites.favoritesTrigger.emit({
  //     data: this.dataInput,
  //   });
  // }
}
