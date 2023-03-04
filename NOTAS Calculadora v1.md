---- Primera version: Calculadora ----

* Aplicación web de una calculadora *

Un mini proyecto que me permitió seguir poniendo en práctica los conocimientos del manejo del DOM en JavaScript trabajando
con la escucha de eventos y funciones.
Además, también pude poner en práctica el concepto de Diseño Responsivo, de tal manera que la aplicación se adapta para
celulares, para tablets (min-width: 720px) y para PCs (min-width: 1080px).

La calculadora puede realizar una operación, retornar su resultado y seguir haciendo operaciones con ese resultado simplemente
haciendo click en algun operador (+, -, /, *) y luego algun numero. Para obtener el resultado debo presionar " = ".

A su vez, si quiero reiniciar puedo, una vez obtenido el resultado de la operación, presionar otros numeros y comenzar nuevas
operaciones. O también puedo optar por el boton " C " que borra todo lo escrito hasta el momento.

El boton " < " borra dígito por dígito lo que estuvimos escribiendo.

Cambios a realizar:
- Al hacer una cuenta, por ejemplo 2+2, si quiero volver a realizar una operación sin presionar la tecla de igual (" = "),
debería mostrarse el resultado inmediatamente en el <span> con id "resultado". Es decir, la aplicación debería poder mostrar el
resultado de las operaciones escritas hasta el momento (--si es que las hay--) al presionar un botón de operación ( +, -, /, *).
  
- Posibilidad de hacer cuentas escribiendo con el teclado de la PC o Celular, manteniendo la funcionalidad principal de presionar
los botones.
