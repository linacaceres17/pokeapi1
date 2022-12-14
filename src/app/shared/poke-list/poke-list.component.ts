import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { PokeapiService } from 'src/app/service/poke-api.service';


@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{

  private setAllPokemons: any;
  public getAllPokemons: any;
 
  constructor (
    private PokeapiService: PokeapiService
  )
     {}

ngOnInit(): void {
  this.PokeapiService.apiListAllPokemons.subscribe(
    res => {
    this.setAllPokemons= res.results;
    this.getAllPokemons= this.setAllPokemons;
  }
  );
  }
  
  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    })
  this.getAllPokemons= filter;
  }
  }

