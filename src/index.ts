export class Soma {
    calcular(a: number, b: number): number {
      return a + b;
    }
  }
  
  export class Subtracao {
    calcular(a: number, b: number): number {
      return a - b;
    }
  }
  
  export class Multiplicacao {
    calcular(a: number, b: number): number {
      return a * b;
    }
  }
  
  export class Divisao {
    calcular(a: number, b: number): number {
      if (b === 0) throw new Error("Divisão por zero");
      return a / b;
    }
  }  