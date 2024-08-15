# Solución

## Actividad 1

1. Genere una **nueva rama A** en base a **main** y agregar los ficheros que considere necesarios. *(.js | .ts | .java | .cs | .html | etc)*.
![Creando la rama A](image.png)
![Agregan ficheros](image-1.png)

2. Restringir del historial de cambios a las carpetas **/bin** **/node_modules** y **/target**.
![creando .gitignore](image-2.png)
![restringir](image-3.png)

3. Generar 2 carpetas cualquiera sin contenido que sean incluidas en el historial de cambios.
![agregando carpetas](image-4.png)
![figuran en el historial](image-5.png)

4. Generar **otra rama B** para realizar nuevas modificaciones y luego integrar estos en la **rama A**.
![Generando rama B](image-6.png)
![Realizando modificacion](image-7.png)
![integrando en la rama A](image-8.png)

5. Integrar **SOLO** el commit con nombre *"FIX: issue 2"* de la rama **hotfix/main** en la **rama A**.
![switch a la rama A](image-9.png)
![integrando](image-10.png)
![resolviendo el conflict](image-11.png)
![integrando con la correccion](image-12.png)
![Integrado el FIX](image-13.png)

6. Ejemplifique el uso de git para la modificación de ficheros en la rama A y en la rama B simultaneamente **sin generar commits en el historial de cambios**.
    ![modificando la rama A](image.png)
    ![modificando la rama B](image.png)

7. Ejemplifique el uso de git para la generación y publicación de un **nuevo release (versión)** de su código.
    ![commiteando](image-14.png)
    ![generando version](image-15.png)
    ![push origin](image-16.png)
## Extras

1. Ejemplique el uso de git para devolver un fichero del **staging area** al estado anterior.
![add archivo.txt](image-17.png)
![volviendo al estado anterior](image-18.png)

2. Ejemplifique el uso de git para regresar en el tiempo hacia un **commit anterior en la rama A** de su repositorio remoto propio.
![commitenado archivot.txt](image-19.png)
![verificando el HEAD para volver un commit atras](image-20.png)
![se volvio al commit "aa58f"](image-21.png)