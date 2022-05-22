import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../model/produtos';
import { ProdutosService } from '../services/produtos.service';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  produtos$: Observable<Produtos[]>;
  displayedColumns = ['nome', 'preco', 'categoria']

 /*  produtosService: ProdutosService; */

  constructor(private produtosService: ProdutosService,
     public dialog: MatDialog,
     private router: Router,
     private route: ActivatedRoute) { 
    this.produtos$ = this.produtosService.list();
  }

  ngOnInit(): void {
  }

  openCadastrar(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
