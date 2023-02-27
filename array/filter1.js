const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true }, // elemento 1 do array
    { nome: "iPad Pro", preco: 4199, fragil: true }, // elemento 2 do array
    { nome: "Copo de Vidro", preco: 12.49, fragil: true }, // elemento 3 do array
    { nome: "Copo de Plástico", preco: 18.99, fragil: false }, // elemento 4 do array
  ];
  console.log(produtos.filter(function (p) {
      // P neste caso represente cada elemento, mas poderia ser qualquer nome. Recebe 3 valores (Valor, index, array)
      return true;
      // true, nenhum elemento filtrado
      // false filtrou tudo e retorna o array vazio
    })
  );

  console.log(produtos.filter(function (p) {
        return p.preco > 500


    })
  );
   
  const caro = (produtos1) => produtos1.preco >= 500; // arrow function Produto que aponta para produto.preco
  const fragil = (produtos2) => produtos2.fragil;
  
  console.log(produtos.filter(caro).filter(fragil)); //filtrou o primeiro filtro para os itens frageis
  // produtos = meus arays .filte = funcao qyue filtra caro = função que passei para o filter avaliar, poderia fazer no corpo da declaracao como no item acima