import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../model/produtos';
import { ProdutosService } from '../services/produtos.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  produtos$: Observable<Produtos[]>;
  displayedColumns = ['nome', 'preco', 'categoria']

 /*  produtosService: ProdutosService; */

  constructor(private produtosService: ProdutosService, public dialog: MatDialog) { 
    this.produtos$ = this.produtosService.list();
  }

  ngOnInit(): void {
  }

  openCadastrar(){
    this.dialog.open(ModalComponent, {
    })
  }
}
