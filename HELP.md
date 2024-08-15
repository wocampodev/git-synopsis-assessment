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
10. creamos las carpetas de manera manual sin contenido alguno, o utilizamos mkdir dir-A , mkdir dir-B
![13](images/13.png)
11. Realizamos un git add . para guardar todos lso cambios y archivos creados. Y con git status validamos los cambios guardados.
![14](images/14.png)
Validamos la rama-B anteriormente creada con git branch -l.
![15](images/15.png)
y con git merge rama-a realizamos la union de ambas ramas a y b.
![16](images/16.png)
12. Ahora realizamos el commit con git commit -m "FIX:issue 2" para realizar el commit de la rama A con el nombre indicado. en la rama hotfix/main.
![17](images/17.png)
luego realizar el push
![18](images/18.png)
13. Para realizar cambios sinq eu se guarden de manera simultanea sin generar commit en el historia de cambios se utiliza el comando git stash.
 Realizamos una modificacion en un archivo y realizamos en git add en la rama-a y posterior utilizamos "git stash", depues nos dirigimos a la rama-B , realizamos cambios y un "git add", regresamos a la rama-a y nos e visualizaran los cambios realizados en la rama-B al finaliza utiliozamos "git stash pop"
lo cual guardara los cambios en la rama-a.
![19](images/19.png)
14. Para generar y publicar un nuevoi realise (version) utilizamos "git tag -a [V*.*.]".
![20](images/20.png)
15. Para devolver un fichero del staging area al estado anterior. Podemos utilizar "git restore" lo cual permite regresar el archivo enviado sin perder los cambios en el area de trabajo.
![21](images/21.png)
16. Tambien utilizar "git reset" lo cual permite regresar el archivo enviado sin perder los cambios en el area de trabajo.pero quita el archivo del area de preparacion.
![22](images/22.png)





