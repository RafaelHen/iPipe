package com.ipipie.ipipeproject.controller;

import java.util.List;

import com.ipipie.ipipeproject.model.Produtos;
import com.ipipie.ipipeproject.repository.ProdutosRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController { 
    
    private final ProdutosRepository produtosRepository;

    public ProdutoController(ProdutosRepository produtosRepository) {
        this.produtosRepository = produtosRepository;
    }

    @GetMapping
    public List<Produtos> lista(){
        return produtosRepository.findAll();
    }


}
