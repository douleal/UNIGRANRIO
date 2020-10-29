var num = 1
var quadrado = []

while (num <=100) {
    num++

    if (num % 2 == 0) {
        cont = num * num
        quadrado.push(cont)
    }
}

console.log(quadrado)