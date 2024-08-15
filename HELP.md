# Actividades principales

## Actividad 1

1. Genere una nueva rama A(feature/J_Antonio) en base a main y agregar los ficheros que considere necesarios. (.js | .ts | .java | .cs | .html | etc).
       a. lo primero sera hacer un fork en el repositorio anfitrion, copiar https
       ![01](./images/img1.png)
       b. desde la consola de git clonamos el repositorio y pegamos la url antes copiada
       ![01](./images/img2.png)
       c. se creara la carpeta la cual es la misma del repositorio.
       ![01](./images/img2.png)
       d. escribimos code ., y se abrira  el VScode
       ![01](./images/img5.png)
       e. los siguiente comandos significan
       ![01](./images/img6.png)
           git branch -a   =>nos ubica en nuestra rama actual
           git checkout -b feature/J_Antonio =>crea una rama nueva bajoe el nombre de feature/J_Antonio
           git checkout feature/J_Antonio tan solo quitan el parametro (P) podemos ver que nos llev a nuestra rama.
       f. creamos nuestrso archibos.
       ![01](./images/img7.png)
       g. subimos nuestros archivos al repostorio remoto
       ![01](./images/img8.png)
       h. al buscar nuestra rama el repostorio veremos los siguiente:
       ![01](./images/img9.png)
       ![01](./images/img10.png)

    

2. Restringir del historial de cambios a las carpetas /bin /node_modules y /target.
      a. creamos el archivo .gitignore y añadimos todos las carpetas que no queremos generar historia  
      ![01](./images/img11.png)

3. Generar 2 carpetas cualquiera sin contenido que sean incluidas en el historial de cambios.
      a. generamos 2 carpetas vacias frontend y backent, asimple vista no se puede gener historial
       ![01](./images/img12.png)
      b. generamos un archivo para cada carpeta .gitkeep , este archivo nos permite generar historial de las carpeta.
       ![01](./images/img13.png)
      c. vista desde nuestro repositorio
       ![01](./images/img14.png)

4.Generar otra rama B(feature/J_Beatriz) para realizar nuevas modificaciones y luego integrar estos en la rama A(feature/J_Antonio).
      a. para esto generaremos a feature/J_Beatriz
      ![01](./images/img15.png)
      b. generamos modificacione en la rama creada en el archivo index.html y se guradan cambios
      ![01](./images/img16.png)
      c. integramos los cambios de feature/J_Beatriz en feature/J_Antonio
      ![01](./images/img17.png)

5.Integrar SOLO el commit con nombre "FIX: issue 2" de la rama hotfix/main en la rama A(feature/J_Antonio)
      a. estos comandoa son utilizados para generar hash de los commit que tiene la rama htfix/main
       ![01](./images/img18.png)
      b. el cherry-pick integra el commit a nuestra rama por medio del git log generarndo los hash que son usadospara su ingrarla a la rama .
      ![01](./images/img19.png)

6.Ejemplifique el uso de git para la modificación de ficheros en la rama A y en la rama B simultaneamente sin generar commits en el historial de cambios.
     a.git stash hace un guradado temporal pero sin la necesidad de hacer uncommit
     b. git stash list genera una lista de los stash
     ![01](./images/img20.png)

7.Ejemplifique el uso de git para la generación y publicación de un nuevo release (versión) de su código.
    a. el comando tag uso para el versionado de nuestro codigo
    ![01](./images/img21.png)
    b. vista desde el GitHub
    ![01](./images/img22.png)





## Extras
Ejemplique el uso de git para devolver un fichero del staging area al estado anterior.
     a. git restore --staged nombre_archivo  =>saca al archivo del area pero mantiene los cambios
     b. git restore archivo.txt  => devuelve a su estados desde su ultimo commit
     ![01](./images/img23.png)
Ejemplifique el uso de git para regresar en el tiempo hacia un commit anterior en la rama A de su repositorio remoto propio.
    a. git reset --soft hash    mantiene el area staging y el directorio
    b. git reset --mixed hash   no mantiene el area staging y pero si el directorio
    c. git reset --hard hash    no mantiene el area staging y no el directorio
     ![01](./images/img24.png)
   
