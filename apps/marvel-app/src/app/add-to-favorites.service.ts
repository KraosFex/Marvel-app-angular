import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoritesService {
  @Output() favoritesTrigger: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
