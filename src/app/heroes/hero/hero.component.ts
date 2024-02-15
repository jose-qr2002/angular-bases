import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  name: string = 'Spiderman';
  realName: string = 'Peter Parker'
  age: number = 19;
  sex: string = 'Masculino';
  method: string = 'Lanzar telaraña';
  capitalName = this.realName.toUpperCase ();


  constructor() { }

  ngOnInit(): void {
    console.log(this.capitalName);
  }

  changeHero(): void {
    let newName: string = prompt("Escriba un nombre") || '';
    if(!newName) {
      alert("No se escribio ningun nombre")
      return;
    }

    this.name = newName;

  }

  changeAge(): void {
    let newAge: string = prompt("Escriba un numero") || '';
    let ageFormat = parseInt(newAge);
    if (Number.isNaN(ageFormat)) {
      alert("No es un numero valido")
      return;
    }

    this.age = ageFormat;

  }

}
