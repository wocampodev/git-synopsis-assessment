# Evaluación Git y Github

## Consideraciones

- Generar un **fork** de este repositorio a su propia cuenta de Github.
- Debe detallar el paso a paso con capturas de pantalla las actividades realizadas, en el fichero **HELP.md** .
- Al terminar generar un **pull request** al **branch** **main** de este repositorio para su revisión. [Referencia](https://www.youtube.com/watch?v=BPns9r76vSI)

## Actividades principales

1. Genere una **nueva rama A** en base a **main** y agregar los ficheros que considere necesarios. *(.js | .ts | .java | .cs | .html | etc)*.

2. Restringir del historial de cambios a las carpetas **/bin** **/node_modules** y **/target**.

3. Generar 2 carpetas cualquiera sin contenido que sean incluidas en el historial de cambios.

4. Generar **otra rama B** para realizar nuevas modificaciones y luego integrar estos en la **rama A**.

5. Integrar **SOLO** el commit con nombre *"FIX: issue 2"* de la rama **hotfix/main** en la **rama A**.

6. Ejemplifique el uso de git para la modificación de ficheros en la rama A y en la rama B simultaneamente **sin generar commits en el historial de cambios**.

7. Ejemplifique el uso de git para la generación y publicación de un **nuevo release (versión)** de su código.

## Extras

1. Ejemplique el uso de git para devolver un fichero del **staging area** al estado anterior.

Eyme Aliaga:
  El staging area es donde se comienza a trabajar, donde se haran ficheros o se modificaran o copiaran.
  Para pasar a un estado anterior de un fichero se puede usar Git Remote o Git reset.
    

2. Ejemplifique el uso de git para regresar en el tiempo hacia un **commit anterior en la rama A** de su repositorio remoto propio.

    - Investigar sobre **git reset**

      Para ello se necesitara realizar un 
      git log ("para ver los cambios hechos")

       dentro de esa respuesta buscaremos el hash(o numero del commit que nos interesa)
     entonces usaremos el comando

      git reset este se divide en tres 
       
        git --hard(este descartara todos los cambios que hemos hecho en el directorio y el staging area)
        git --soft(este por su lado mantedra los cambios en ambos)
        git --mixed(para este mientras que mantiene los cambios en el directorio, descartara los cambios en el staging area)

        