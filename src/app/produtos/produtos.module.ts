import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { MatTableModule} from '@angular/material/table';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
    
  ]
})
export class ProdutosModule { }
