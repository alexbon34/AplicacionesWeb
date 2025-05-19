Métodos para agregar estilos a componentes en React

Estilos inline: 
Se implementan pasando un objeto JavaScript a la prop style de un elemento JSX.
Ventajas: Simple de implementar para estilos dinámicos basados en props/state. También no hay riesgo de colisión de nombres (scoped por naturaleza).
Desventajas: No soporta pseudo-clases (:hover, :focus) ni pseudo-elementos. No permite media queries para diseño responsivo. Difícil de mantener en proyectos grandes.
Perspectiva personal: Utilizaría este método solo para hacer pruebas rápidas, pero no para uso principal en un proyecto ya que durante el curso hemos visto que no es una buena práctica.

Hojas de estilo externas:
Consiste en importar archivos .css que contienen reglas de estilo, usando clases normales en los componentes.
Ventajas: Soporta todas las características de CSS (pseudo-clases, animaciones, etc.). Buen rendimiento, ya que el navegador puede cachear los estilos.
Desventajas: Riesgo de colisiones de nombres de clases. Estilos globales por defecto (a menos que se use CSS Modules). Dificultad para manejar estilos dinámicos. Puede llevar a hojas de estilo muy grandes.
Perspectiva personal: Podría ser una opción buena para trabajar en proyectos pequeños o donde hay grupos de desarrolladores con experiencia en CSS.

Módulos de CSS:
CSS Modules permite escribir CSS normal pero con encapsulación automática de los nombres de clase. Las clases se importan como objetos JavaScript.
Ventajas: Encapsulación automática (no colisiones de nombres). Sintaxis CSS estándar con todas sus características.
Desventajas: Configuración adicional requerida en algunos bundlers. Estilos dinámicos más difíciles de implementar. Puede ser menos intuitivo para desarrolladores nuevos.
Perspectiva personal: Es un método bastante ordenado y organizado, en proyectos grandes podría ser de gran utilidad para manejar los estilos de los componentes. 

Styled Components:
Es una biblioteca popular que permite escribir CSS real dentro de JavaScript, creando componentes estilizados.
Ventajas: Estilos completamente encapsulados. Fácil manejo de estilos dinámicos basados en props. Soporte completo de CSS (pseudo-clases, media queries). Mejor mantenibilidad (estilos colocados con la lógica del componente). Es Server Side Rendering fácil.
Desventajas: Overhead de rendimiento en algunos casos. Curva de aprendizaje para desarrolladores tradicionales. Dependencia adicional en el proyecto.
Perspectiva personal: Entre todas las opciones es la más ventajosa y la más adecuada para proyectos grandes y complejos. A pesar de tener un impacto en el rendimiento, tiene la ventaja de que tiene soporte para todas las características de CSS.
