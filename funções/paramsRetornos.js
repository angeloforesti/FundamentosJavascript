function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m2.`)
    } else {
        return area
    }
}     
console.log(area(2,6))
console.log(area(5,6))
console.log(area(2,6,7,8))