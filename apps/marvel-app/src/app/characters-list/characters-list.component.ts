import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'developer-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  constructor(private characterSVC: RestService) {}

  public allCharacters: Observable<any> = this.characterSVC.getAllCharacters();

  ngOnInit(): void {}
}
