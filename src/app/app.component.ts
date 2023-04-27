import { Component } from '@angular/core';
import { Animale } from './animale/animale.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seconda verifica di recupero 27/04/2023';
  animali: Animale[] =
  [
    {
       "nome": "cane",
       "verso": "bau",
       "zampe": 4,
       "movimento": "cammina"
    },
    {
       "nome": "rana",
       "verso": "cra",
       "zampe": 4,
       "movimento": "salta"
    },
    {
       "nome": "canarino",
       "verso": "fiu",
       "zampe": 2,
       "movimento": "vola"
    },
    {
       "nome": "serpente",
       "verso": "fss",
       "zampe": 0,
       "movimento": "striscia"
    }
 ];
 
 onSortClick() {
}

}
