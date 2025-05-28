# Herramientas para Pruebas Unitarias en JavaScript

## 📌 Introducción

Este documento describe las principales herramientas para realizar pruebas unitarias en el ecosistema JavaScript, incluyendo sus características, casos de uso y ejemplos prácticos.

---

## 🃏 Jest

### 🔍 Descripción
Framework de pruebas completo desarrollado por Facebook. Conocido por:
- Configuración cero ("zero-config")
- Alta velocidad de ejecución
- Características integradas (cobertura de código, mocks, snapshots)
- Excelente integración con proyectos React

> **Nota**: La "configuración cero" en Jest significa que funciona con valores predeterminados óptimos para la mayoría de casos, permitiendo comenzar rápidamente sin ajustes complejos.

### ✅ Casos recomendados
- Soluciones todo-en-uno con mínima configuración
- Proyectos con React/React Native
- Cuando se necesitan snapshots o cobertura de código integrada
- Proyectos que requieren buen soporte para mocking

### ❌ Casos no recomendados
- Cuando se necesita un framework extremadamente ligero
- Trabajo con módulos ES nativos sin transpilación (mejorado en versiones recientes)
- Cuando se requiere alta personalización del entorno

### 💻 Ejemplo de código

```javascript
// math.js
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


s