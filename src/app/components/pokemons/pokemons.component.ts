import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})

export class PokemonsComponent {
  Pokemons:any = [];
  constructor(
    private PokeService: PokeApiService,
    private router: Router
  ) { }

  ngOnInit(){
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.PokeService.getPokemons().subscribe(pokemons => {
      console.log(pokemons);
      this.Pokemons = pokemons;
    })
  }

  showPoke(id:any) {
    this.router.navigateByUrl(`pokemons/${id}`);
    console.log(id);
  }
}
