export class Soma {
    calcular(a, b) {
        return a + b;
    }
}
export class Subtracao {
    calcular(a, b) {
        return a - b;
    }
}
export class Multiplicacao {
    calcular(a, b) {
        return a * b;
    }
}
export class Divisao {
    calcular(a, b) {
        if (b === 0)
            throw new Error("Divisão por zero");
        return a / b;
    }
}
