import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroeNames: string[] = ['Spiderman', 'Superman', 'Ironman', 'Thor'];

  heroeEliminado: string = '';

  constructor() { }

  removeLastHero(): void {
    if(this.heroeNames.length > 0) {
      this.heroeEliminado = this.heroeNames.pop()!;
      console.log(this.heroeNames)
    }
  }

  ngOnInit(): void {
  }

}
