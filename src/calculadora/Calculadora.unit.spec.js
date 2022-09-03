import Calculadora from './Calculadora.js';
import { logger } from '../infraestrutura/logger.js';
jest.mock('../infraestrutura/logger.js', () => {
  return {
    logger: {
      info: jest.fn(),
    },
  };
});


// ----------------------------------------------------------------
//                    Testes Unitários - Soma
// ----------------------------------------------------------------
test('Dado o parâmetro (3, 4) quando realizar a soma então deve retornar 7', () => {
  const calculadora = new Calculadora();
  expect(calculadora.soma(3, 4)).toEqual(7);
});
test('Dado o parâmetro negativo (-4, -2) quando realizar a soma então deve retornar -6', () => {
  const calculadora = new Calculadora();
  expect(calculadora.soma(-4, -2)).toEqual(-6);
});
test('Dado o parâmetro (7, 4) quando realizar a soma então deve acrescentar 11 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.soma(7, 4);
  expect(calculadora.total).toEqual(11);
});
test('Dado os parâmetros (4, 5) e (2, 6) quando realizar a soma então deve acrescentar 17 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.soma(4, 5);
  calculadora.soma(2, 6);
  expect(calculadora.total).toEqual(17);
});
test('Dado os parâmetros (3, 5) e (5, 1) quando realizar a soma então deve chamar o info do logger com valor "resultado da soma: 14"', () => {
  const calculadora = new Calculadora();
  calculadora.soma(3, 5);
  calculadora.soma(5, 1);
  expect(logger.info).toHaveBeenCalledWith('resultado da soma: 14');
});


// ----------------------------------------------------------------
//                    Testes Unitários - Subtração
// ----------------------------------------------------------------

test('Dado o parâmetro (7, 1) quando realizar a subtração então deve retornar 6', () => {
  const calculadora = new Calculadora();
  expect(calculadora.subtracao(7, 1)).toEqual(6);
});
test('Dado o parâmetro negativo (-1, -8) quando realizar a subtracao então deve retornar 7', () => {
  const calculadora = new Calculadora();
  expect(calculadora.subtracao(-1, -8)).toEqual(7);
});
test('Dado o parâmetro (8, 6) quando realizar a subtração então deve acrescentar 2 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.subtracao(8, 6);
  expect(calculadora.total).toEqual(2);
});
test('Dado os parâmetros (6, 5) e (2, 4) quando realizar a subtracao então deve acrescentar -1 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.subtracao(6, 5);
  calculadora.subtracao(2, 4);
  expect(calculadora.total).toEqual(-1);
});
test('Dado o parâmetro (4, 5) quando realizar a subtracao então deve chamar o info do logger com valor "resultado da subtracao: -1"', () => {
  const calculadora = new Calculadora();
  calculadora.subtracao(4, 5);
  expect(logger.info).toHaveBeenCalledWith('resultado da subtracao: -1');
});


// ----------------------------------------------------------------
//                    Testes Unitários - Multiplicação
// ----------------------------------------------------------------

test('Dado o parâmetro (3, 2) quando realizar a multiplicacao então deve retornar 6', () => {
  const calculadora = new Calculadora();
  expect(calculadora.multiplicacao(3, 2)).toEqual(6);
});
test('Dado o parâmetro negativo (-1, -9) quando realizar a multiplicacao então deve retornar 9', () => {
  const calculadora = new Calculadora();
  expect(calculadora.multiplicacao(-1, -9)).toEqual(9);
});
test('Dado o parâmetro (3, 9) quando realizar a multiplicacao então deve acrescentar 27 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.multiplicacao(3, 9);
  expect(calculadora.total).toEqual(27);
});
test('Dado os parâmetros (2, 7) e (3, 6) quando realizar a multiplicacao então deve acrescentar 32 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.multiplicacao(2, 7);
  calculadora.multiplicacao(3, 6);
  expect(calculadora.total).toEqual(32);
});
test('Dado o parâmetro (2, 4) quando realizar a multiplicacao então deve chamar o info do logger com valor "resultado da multiplicacao: 8"', () => {
  const calculadora = new Calculadora();
  calculadora.multiplicacao(2, 4);
  expect(logger.info).toHaveBeenCalledWith('resultado da multiplicacao: 8');
});


// ----------------------------------------------------------------
//                    Testes Unitários - Divisão
// ----------------------------------------------------------------

test('Dado o parâmetro (4, 2) quando realizar a divisao então deve retornar 2', () => {
  const calculadora = new Calculadora();
  expect(calculadora.divisao(4, 2)).toEqual(2);
});
test('Dado o parâmetro negativo (-4, -2) quando realizar a divisao então deve retornar 2', () => {
  const calculadora = new Calculadora();
  expect(calculadora.divisao(-4, -2)).toEqual(2);
});
test('Dado o parâmetro (2, 1) quando realizar a divisao então deve acrescentar 2 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.divisao(2, 1);
  expect(calculadora.total).toEqual(2);
});
test('Dado os parâmetros (2, 4) e (8, 2) quando realizar a divisao então deve acrescentar 4.5 à variável total', () => {
  const calculadora = new Calculadora();
  calculadora.divisao(2, 4);
  calculadora.divisao(8, 2);
  expect(calculadora.total).toEqual(4.5);
});
test('Dado o parâmetro (5, 2) quando realizar a divisao então deve chamar o info do logger com valor "resultado da divisao: 2.5"', () => {
  const calculadora = new Calculadora();
  calculadora.divisao(5, 2);
  expect(logger.info).toHaveBeenCalledWith('resultado da divisao: 2.5');
});
test('Dado o parâmetro (0, 2) quando realizar a divisao então deve retornar a mensagem de erro "Impossível dividir por 0"', () => {
  const calculadora = new Calculadora();
  calculadora.divisao(0, 2);
  expect(calculadora.divisao(0, 2)).toEqual("Impossível dividir por 0");
})
