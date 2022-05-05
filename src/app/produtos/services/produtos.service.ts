import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Produtos } from '../model/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // chamada ajax - chamada asyncrona com servidor.

  private readonly API = '/assets/produtos.json';

  constructor(private httpClient: HttpClient) { }


  list(){
    return  this.httpClient.get<Produtos[]>(this.API)
    .pipe(
      first(),
      delay(50),
      tap(produtos => console.log(produtos))
    );
  }
}
