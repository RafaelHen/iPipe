package com.ipipie.ipipeproject;

import com.ipipie.ipipeproject.model.Produtos;
import com.ipipie.ipipeproject.repository.ProdutosRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class IpipeProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(IpipeProjectApplication.class, args);
	}


	@Bean
	CommandLineRunner initDataBase(ProdutosRepository ProdutosRepository){
		return args -> {
			ProdutosRepository.deleteAll();
			Produtos p= new Produtos();
			p.setNome("Volante Volvo");
			p.setCategoria("Carro");

			ProdutosRepository.save(p);
		};
	}
}
