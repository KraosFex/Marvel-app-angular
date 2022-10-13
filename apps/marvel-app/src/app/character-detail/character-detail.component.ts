import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
@Component({
  selector: 'developer-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  public respuesta: any = {};
  constructor(
    private route: ActivatedRoute,
    private restService: RestService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.cargarData(params.id);
    });
  }

  cargarData(id: string): void {
    this.restService.getCharacter(id).subscribe((res) => {
      this.respuesta = res[0];
    });
  }
}
