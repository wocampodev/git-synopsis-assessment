# Solución

## Actividades principales

1. Genere una nueva rama A en base a main y agregar los ficheros que considere necesarios. (.js | .ts | .java | .cs | .html | etc).

    - Crear y cambiar a una nueva rama 'A'

        ![01](./images/S01-01.png)

    - Agregamos nuevos ficheros.
    
        ![01](./images/S01-02.png)

    - Agregamos los cambios al staging area y realizamos un commit

        ![01](./images/S01-03.png)

        ![01](./images/S01-04.png)

    
2. Restringir del historial de cambios a las carpetas **/bin** **/node_modules** y **/target**.

    - Editamos el archivo .gitignore, añadiendo las excepciones.

        ![01](./images/S02-03.png)

        ![01](./images/S02-01.png)

    - Realizamos un commit con los cambios.

        ![01](./images/S02-02.png)


3. Generar 2 carpetas cualquiera sin contenido que sean incluidas en el historial de cambios.

    - Creamos dos carpetas vacías 'folderex1' y 'folderex2'.

        ![01](./images/S03-01.png)

    - Nos aseguramos que Git (.gitkeep) las incluya en el historial de cambios.

        ![01](./images/S03-02.png)


4. Generar **otra rama B** para realizar nuevas modificaciones y luego integrar estos en la **rama A**.

    - Creamos la rama B.
    
        ![01](./images/S04-01.png)

    - Realizamos modificaciones en los ficheros.
    
        ![01](./images/S04-02.png)

    - Realizamos un commit de los cambios en la rama B
    
        ![01](./images/S04-03.png)

    - Cambiamos a la rama A e integramos los cambios de la rama B.
    
        ![01](./images/S04-04.png)


5. Integrar **SOLO** el commit con nombre *"FIX: issue 2"* de la rama **hotfix/main** en la **rama A**.

    - Nos movemos a la rama hotfix/main.

        ![01](./images/S05-01.png)

    - Identificamos el hash del commit "FIX: issue 2".
        
        ![01](./images/S05-02.png)

    - Integramos solo ese commit en la rama A.

        ![01](./images/S05-03.png)

        *Nota: Dado que el archivo fue eliminado, debemos resolver el conflicto decidiendo si mantenemos el archivo o lo eliminamos, en mi caso lo restauramos.*

        ![01](./images/S05-04.png)

6. Ejemplifique el uso de git para la modificación de ficheros en la rama A y en la rama B simultaneamente **sin generar commits en el historial de cambios**.

    - Modificamos ficheros en la rama A.

        ![01](./images/S06-01.png)

    - Guardamos los cambios de la rama A usando git stash.

        ![01](./images/S06-02.png)

    - Cambiamos a la rama B y modificamos otros ficheros.

        ![01](./images/S06-03.png)
    
    - Aplicamos los cambios de la rama A en la rama B

        ![01](./images/S06-04.png)
    
    - Guardarmos los cambios en un stash temporalmente

        ![01](./images/S06-05.png)

    - Cambiamos a la rama A y aplicamos los cambios combinados

        ![01](./images/S06-06.png)


7. Ejemplifique el uso de git para la generación y publicación de un **nuevo release (versión)** de su código.

    - Vamos a la pestaña Releases en GitHub.
    - Hacemos clic en Create a new release.

        ![01](./images/S07-01.png)

    - Asignamos un nombre a la versión y seleccionamos la rama a usar.
    - Añadimos una descripción y publicamos la release.

        ![01](./images/S07-02.png)

## Extras

1. Ejemplique el uso de git para devolver un fichero del **staging area** al estado anterior.

2. Ejemplifique el uso de git para regresar en el tiempo hacia un **commit anterior en la rama A** de su repositorio remoto propio.

- Investigar sobre **git reset**
    - `git reset` es un comando de Git que se utiliza para revertir cambios en el repositorio de trabajo.

    Formas de utilizar git reset
    - `git reset sin opciones`: Revierte TODOS los cambios realizados en el repositorio de trabajo desde el último commit.
    - `git reset <archivo>`: Revierte los cambios realizados en un archivo específico.
    - `git reset --hard`: Revierte todos los cambios realizados en el repositorio de trabajo y elimina cualquier cambio en el *staging area*.
    - `git reset --soft`: Revierte los cambios realizados en el *staging area*, pero no afecta a los archivos en el repositorio de trabajo.
    - `git reset --mixed`: Revierte los cambios realizados en el *staging area* y en los archivos en el repositorio de trabajo.
