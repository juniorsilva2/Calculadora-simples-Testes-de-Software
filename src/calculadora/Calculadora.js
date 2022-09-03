import { info } from 'winston';
import { logger } from '../infraestrutura/logger.js';

class Calculadora {
  total = 0;

  soma = (numero1, numero2) => {
    const resultado = numero1 + numero2;
    this.total += resultado;
    logger.info(`resultado da soma: ${this.total}`);
    return resultado;
  };

  subtracao = (numero1, numero2) => {
    const resultado = numero1 - numero2;
    this.total += resultado;
    logger.info(`resultado da subtracao: ${this.total}`);
    return resultado;
  }

  multiplicacao = (numero1, numero2) => {
    const resultado = numero1 * numero2;
    this.total += resultado;
    logger.info(`resultado da multiplicacao: ${this.total}`);
    return resultado;
  }

  divisao = (numero1, numero2) => {
    if(numero1 === 0 || numero2 === 0) {
      const erro = "Impossível dividir por 0"
      return erro
    }
    const resultado = numero1 / numero2;
    this.total += resultado;
    logger.info(`resultado da divisao: ${this.total}`);
    return resultado;
  }
}

export default Calculadora;
