package com.ipipie.ipipeproject.repository;

import com.ipipie.ipipeproject.model.Produtos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutosRepository extends JpaRepository<Produtos, Long> {
    

}
