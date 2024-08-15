# Solución

## Actividad 1

1. Creación del Fork del repositorio git-synopsis-assessment.

    ![01](./images/FORK0.png)
    ![01](./images/FORK1.png)

2. Tomando link HTTPS para clonar el repositorio en mi area local
    ![02](./images/FORK2.png)

3. Inicializando git y realizando la clonación en el git bash, con el comando git clone y el link HTTPS
    ![03](./images/FORK3.png)

4. Abriendo el IDE y al lado se ve la clonación del repositorio
    ![04](./images/FORK4.png)

5. Creamos la rama A y nos establecemos en ella con el comando git checkout -b A y verificamos que estemos en la rama A con el comando git branch
    ![05](./images/FORK5.png)

6. Añadimos al gitignore las carpetas solicitadas a restringir en el historial de cambios, las cuales son bin, node_modules y target.
    ![06](./images/FORK6.png)

7. Agregamos carpetas con .gitkeep para que a pesar de estar vacias sean incluidas en el historial de cambios al realizar add, commit y push.
    ![07](./images/FORK7.png)

8. Guardamos todos estos cambios realizados en la rama A del fork.
    ![08](./images/FORK8.png)

9. Se crea la rama B y nos establecemos en ella con el comando git checkout -b B, verificamos que estemos dentro de B con el comando git branch

    ![09](./images/FORK9.png)

10. Creamos la rama hotfix/main con el comando git checkout -b hotfix/main, realizamos un commit con el mensaje git commit -m "FIX:issue2" y luego un cherry-pick con los primeros 6 caracteres de commit, ya que solo queremos guardar los cambios de ese commit en la rama A, esto se realizará con el comando (estando en la rama a la cual haremos el commit) git cherry-pick c9271
    ![10](./images/FORK10.png)
    ![10](./images/FORK11.png)
    ![10](./images/FORK12.png)

11. Se realiza un git stash para guardar git add ., tendremos una carpeta-stash como evidencia, el cambio de esta será guardado en git stash, el cual luego de cambiar de rama podremos solicitar con git stash apply para posteriormente realizar el commit en la rama que deseemos. A y B
    ![11](./images/FORK13.png)
    ![11](./images/FORK14.png)

12. realizamos una instancia git tag para guardar la version del proyecto con el comando git tag -a v1.0.0.0 -m "mi primera version", posteriormente veriicamos la version que estamos trabajando con git tag, y posteriormente actualizamos en remoto con git push origin --tags.

    ![12](./images/FORK15.png)
    ![12](./images/FORK16.png)

## EXTRAS

1. ACTIVIDAD 1Para regresar al estado anterior despues de aver dado git add . reset.js en mi caso un archivo reset.js que añadi, se utiliza el comando git reset reset.js(nombre del archivo), en donde se volverá al estado anterior a aver guardado en stage el archivo seleccionado.

2. Para regresar en el tiempo hacia un commit anterior en la rama A de su propio repositorio remoto debo establecerme en la rama A con git checkout y buscar git log para ver los cambios realizados, a los cuales podré volver utilizando su codigo hash en el comando git 

    ![17](./images/FORK17.png)

    ...
