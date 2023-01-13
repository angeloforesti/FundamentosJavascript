function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};

}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));

















/*
v e v -> V  basta um falso para o resultado ficar falso
v e f -> f &&
f e ? -> f

v ou ? -> v basta um verdadeiro para o resultado ficar verdadeiro
f ou v -> v   ||
f ou f -> f  

V xor v -> f exclusivo verdadeiro
V xor f -> v !!( , ^ ,)
f xor v -> v
f xor f -> f

!v -> f negação logica de algo vira o oposto, operador unario
!f -> v*/
