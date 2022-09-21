Para rodar o projeto rodar os comandos abaixo

Instala todos os packages:
    
    * npm install

Verificar os dados para conexão do banco no arquivo .env:
    
    * Os dados para conectar ao banco estão no arquivo .env, com o 'user'='root', 'senha'='', e a 'porta'=3306, apontando para o localhost, caso algum dos dados padrões seja diferente atualizar o .env (ou se preferir alterar o arquivo src/config/dbConfig.js)

Rodar o server:
    
    * npm run start

Rotas de categoria:

Retornar todas as categorias:
    (get) localhost:3000/category

Retornar uma categoria especifica:
    (get) localhost:3000/category/{id}

Criar uma categoria:
    (post) localhost:3000/category
    body: {
        "name": "Categoria1", // optional
    }

Alterar (tudo ou parte) de uma categoria especifica:  
    (patch) localhost:3000/category/{id}
    body: {
        "name": "Categoria1", // optional
    }


Rotas de produto:

Retornar todos os produtos:
    (get) localhost:3000/product

Retornar um produto especifico:
    (get) localhost:3000/product/{id}

Retornar uma listagem de produto por filtro:
    (post) localhost:3000/product/filter
    body: {
        "title": "Pro", // optional
        "category_id": 2 // optional
    }

Criar um produto:
    (post) localhost:3000/product
    body: {
        "title": "Produto6",
        "description": "Descrição do produto 6",
        "price": 1234.56,
        "category_id": 2
    }

Alterar (tudo ou parte) de um produto especifico:  
    (patch) localhost:3000/product/{id}
    body: {
        "title": "Produto6", // optional
        "description": "Descrição do produto 6", // optional
        "price": 1234.56, // optional
        "category_id": 2 // optional
    }

Deletar um produto especifico:
    (delete) localhost:3000/product/{id}
