# Solución

## Actividad 1

1. Para realizar el fork , me dirigi a github (abrindo el enlace al proyecto) y 
    me ubique en el btn fork en la parte superior del btn verde de code, le di click.
    Me consultaba si     deseaba hacer el fork y le di en crear fork.
    ![01](images/01.png)
    ![02](images/02.png)
2. Para clonar el repositorio en mi directorio de trabajo local, realizo lo siguiente:
    Primero abri el VSC y abri una nueva terminal
    ![03](images/03.png)
    me ubique el la carpeta donde deseo
    guardar la carpeta a clonar.
    Usando: 
        cd desktop
        ls
        cd DGIT 
        ![04](images/04.png)
3. Despues utilizando git clone https://github.com/LunaWilfredo/git-synopsis-assessment.git 
    realizo el clonado.
    ![05](images/05.png)
4. Para realizar la creacion de las ramas correspondientes , valido las ramas creadas en el projecto
    utlizando git branch -l para listar las ramas.
    ![06](images/06.png)
5. Ahora creamos la rama de trabajo previo a la creacion de las ramas solicitadas,
    utilizando git branch feature/luna
    ![07](images/07.png)
6. Ahora ingresamos dentro de la rama creada y creamos las ramas solicitadas para el ejercicio
    ![08](images/08.png)
    con git bramch rama-A y git branch rama-B creamos las ramas
    ![09](images/09.png)
7. Ahora ingresamos en la rama-A donde crearemos los ficheros necesarios
    con git checkout rama-A
    ![10](images/10.png)
8. dentro de la rama-A creamos los ficheros manualmente
    ![11](images/11.png)
9. Para limitar las carpetas de modificacion creamos el archivo .gitignore y colocamos: 
    /bin
    /node_modules
    /target
las carpetas a las que deseamos restringir los cambios
![12](images/12.png)
10. 


