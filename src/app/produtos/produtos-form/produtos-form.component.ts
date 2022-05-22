import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private service: ProdutosService) { 
      this.form = this.formBuilder.group({
        name: [null],
        preco: [null],
        categoria: [null]
      });
    }

  ngOnInit(): void {
  }

}
