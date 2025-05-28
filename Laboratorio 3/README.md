# Herramientas existentes para realizar pruebas unitarias en el ecosistema de JavaScript
## Jest
Es un framework de pruebas completo desarrollado por Facebook. Es conocido por su configuración cero ("zero-config"), su velocidad y sus características integradas como cobertura de código, simulaciones (mocks) y snapshots. Jest funciona especialmente bien con proyectos React, pero puede usarse con cualquier proyecto JavaScript.

Nota: La configuración cero en Jest se refiere a su capacidad de funcionar sin necesidad de una configuración manual extensa. Está diseñado para ejecutarse con valores predeterminados que cubren la mayoría de los casos de prueba, lo que permite comenzar a escribir y ejecutar pruebas sin preocuparse por ajustes adicionales.
### Cuando sí aplica: 
Necesitas una solución todo-en-uno con mínima configuración.
Trabajas con React, React Native o proyectos de Facebook.
Requiere características como snapshots o cobertura de código integrada.
Prefieres un framework con buen soporte para mocking.
### Cuando no se recomienda: 
Cuando se necesita un framework extremadamente ligero.
Trabajas con módulos ES nativos sin transpilación (aunque esto ha mejorado en versiones recientes).
Cuando se requiere una alta personalización del entorno de pruebas.
### Ejemplo de código:
```// math.js
function sum(a, b) {
  return a + b;
}

module.exports = { sum };

// math.test.js
const { sum } = require('./math');

describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adding negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
```
### Mocha
Es un framework de pruebas flexible y minimalista que se ejecuta en Node.js y en el navegador. A diferencia de Jest, Mocha no viene con funcionalidades como assertions o mocking integradas, por lo que generalmente se usa con librerías complementarias como Chai (para assertions) y Sinon (para mocks).
## Cuando si aplica:
Cuando el desarrollador prefiere elegir sus propias librerías de assertions y mocking.
Cuando se necesita un framework altamente configurable.
Cuando se trabaja con pruebas asíncronas complejas (Mocha tiene excelente soporte para async/await).
Cuando se busca ejecutar pruebas tanto en Node.js como en el navegador.
## Cuando no se recomienda: 
Cuando se busca una solución con configuración cero.
Cuando se requiere características como snapshots o cobertura de código sin configuración adicional.
Cuando se trabaja en un proyecto pequeño donde la simplicidad es clave.
## Ejemplo de código:
```// math.js
function multiply(a, b) {
  return a * b;
}

module.exports = { multiply };

// math.test.js
const { expect } = require('chai');
const { multiply } = require('./math');

describe('Math functions', () => {
  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).to.equal(6);
  });

  it('should return zero when multiplying by zero', () => {
    expect(multiply(5, 0)).to.equal(0);
  });
});
```
### Vitest
Es un framework de pruebas moderno y rápido construido sobre Vite. Está diseñado para ser compatible con Jest en cuanto a API, pero aprovecha las capacidades de Vite para ofrecer un entorno de pruebas más rápido, especialmente en desarrollo. Vitest es ideal para proyectos que ya usan Vite. 
## Cuando si aplica:
Cuando el proyecto ya usa Vite como herramienta de construcción.
Cuando se necesita un entorno de pruebas extremadamente rápido con HMR (Hot Module Replacement).
Cuando se busca una API compatible con Jest pero con mejor rendimiento.
Cuando se trabaja con módulos ES nativos y TypeScript sin configuración adicional.
## Cuando no se recomienda: 
No se está utilizando Vite en el proyecto.
Cuando se necesita máxima compatibilidad con entornos legacy.
Cuando se trabaja en un proyecto que ya tiene una configuración compleja de Jest y que no se quiere migrar.
## Ejemplo de código:
```// utils.js
export function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// utils.test.js
import { describe, test, expect } from 'vitest';
import { capitalize } from './utils';

describe('capitalize function', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns empty string for non-string input', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });
});
```
