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
  constructor(
    private characterSVC: RestService,
    private notElement: AddToFavoritesService
  ) {}

  public allCharacters: Observable<any> = this.characterSVC.getAllCharacters();
  public notCharacters: Array<any> = [];

  ngOnInit(): void {
    this.getCharacters();
    this.notElement.favoritesTrigger.subscribe((data) => {
      this.notCharacters.push(data);
    });
  }

  getCharacters() {
    this.allCharacters;
  }
}
