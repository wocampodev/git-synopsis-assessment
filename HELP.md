# Solución

## Actividad 1

1. EL primer paso a realizar fue clonar el repositorio remoto a mi repositorio local:
    ![01](./images/GitClone.png)

2. Luego cree la Rama "a" y el main.js, que estará dentro de la rama misma rama:

    ![02](./images/BranchA.png)

3. Por ultimo realice el commit y push para enviar la captura del main.js al repositorio remoto:

    ![03](./images/CommitMain.png)

## Actividad 2

1. En primer lugar agregue el ".gitignore", el cual es utilizado para restringir del historial de cambios:
    ![01](./images/GitIgnore.png)

2. Luego, defini que carpetas seran ignoradas del historial de cambios, estas son las carpetas "bin", "node_modules" y "target"
    ![02](./images/RestringirCambios.png)

## Actividad 3

1. En este caso, se genero las carpetas "Carpeta1" y "Carpeta2", las cuales no tienen ningun contenido.
    ![01](./images/CarpetasVacias.png)

2. Para que ambas carpetas vacias puedan ser incluidas dentro del historial de cambias es necesario aplicar el .gitkeep, en estas carpetas, para que puedan ser trackeadas:
    ![02](./images/GitKeep.png)

## Actividad 4

1. Se genero la rama "b", y la seleccionamos.
    ![01](./images/BranchB.png)

2. La nueva modificación dentro de esta rama será dentro del "main.js", el cual presenta un console.log extra a diferencia de la rama "a":
    ![02](./images/ModificacionMain.png)

3. Se realizo el commit de la nueva modificación del "main.js" para poder pasarnos otra vez a la rama "a" para realizar la integración:
    ![03](./images/ComminMainModificado.png)

4. Una vez dentro de la rama "a" se realiza el merge con la rama "b", el cual permite agregar las nuevas modificaciones realizadas en la rama "b" a la rama "a":
    ![04](./images/MergeBranch.png)

## Actividad 5

1. Se genero la rama "hotfix/main", en la cual realice una modificacion en la "main.js", con el fin de conseugir el log del commit de modificación:
    ![01](./images/CommitHotFix.png)

2. Una vez ya obtenido el log del commit del "hotfix/main", me traslade a la rama "a", realizando el cherry-pick con la finalidad de integrar solamente el commit del hotfix a mi rama "a":
    ![02](./images/CherryPick.png)

## Actividad 6

1. En el "main.js" se agrego un texto de prueba del stash para verificar si realmente realizaba un commit de manera local, al momento de ejecutarlo, nos mostro la versión anterior de la modificación:
    ![01](./images/GitStashA1.png)

2. De esta forma se realizo la copia de manera local, sin realizar un commit, y se llamo a la modificación dentro de mi rama "a" con el stash pop:
    ![02](./images/GitStashA2.png)

3. Por otro lado, en la rama B, se agrego "stash.js" con la finalidad de verificar si los cambios afectaban de la misma manera:
    ![03](./images/GitStashB1.png)

4. De la misma manera, se recupero los cambios realizados empleando el stash pop en la rama "b" sin generar commits en el historial de cambios:
    ![04](./images/GitStashB2.png)

## Actividad 7

1. Para ingresar la versión actual del código se empleo el git tag, el cual permite establecer el numero de version del codigo realizado, luego de identificar esta version como "v1.0.0":
    ![01](./images/GitTag.png)

2. Finalizando con el git tag, se subio la version actual al repositorio remoto: 
    ![02](./images/RemotoTag.png)

# Extras

## Actividad 1
1. Para esta actividad extra, primero modifique mi "main.js" de la rama "a" modificando los textos, ademas de usar el git add con las nuevas modificaciones:
    ![01](./images/ExtraRestore1.png)

2. Para regresar el archivo antes de ser modificado, utilice el git restore, permitiendo volver el "main.js" a su version anterior: 
    ![02](./images/ExtraRestore2.png)


## Actividad 2
