function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)

}

new Pessoa

/*mesmo com o codigo sendo chamado via um temporizador
 a arrow function dentro do contexto lexico de onde foi escrita
  tras o resultado que esperamos
*/
