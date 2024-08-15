# Solución



## PASO A PASO EL PROCEDIMIENTO


## Actividad 1

1. Primero clone el repositorio, seguidamente navegue al directorio "git-synospsis-assessment" hice algunas pruebas para que las imagenes se puedan adjuntar claramente en el fichero "HELP.md", todo esto en mi copia que hice con el fork, acontinuación, presento procedimiento:

    ![01](./images/01.png)
    ![02](./images/02.png)

Luego, iniciamos con la actividad 1 : 
Para crear una nueva rama debemos estar asegurarnos de estar en la rama principal y que este actualizada:
    ![03](./images/03.png)

Seguidamente, creamos la nueva rama llamada "A"  y verificamos la creación y que estamos usando esta nueva rama:
    ![04](./images/04.png)

Pot último, cree los ficheros "script.js", "styles.css" y el "index.html":
    ![05](./images/05.png)

2. Primeramente, para poder restringir del historial de cambios a carpetas especificas, debems necesitar un archivo adicional ".gitignore". Debemos crear este fichero y luego dentro escribir lo que queresmos ignorar, a continuación:

    ![06](./images/06.png)
    ![07](./images/07.png)

Luego , para comprobar si toma en cuenta estos archivos hacemos un "git status" si existe algun archivo con esa ruta. Segun la documentación, si no se ve en el indice de Git, es buena practica y para inconvenientes futuros, borrar el indice de Git con : 

   ![08](./images/08.png)
   ![09](./images/09.png)

3. Para poder crear las carpetas utilizamos "mkdir" y revisando documentación, se nos indica que Git no rastrea carpetas vacias por defecto, por esta razón existe un sencilla técnica que es crear carpetas de tipo  ".gitkeep" dentro de las carpetas vacias. De esta manera puedan ser tomadas en cuenta, a continuación: 
    ![10](./images/10.png)

4. Creamos nuestra nueva rama "B"  con el comando "-b" y nos aseguramos que nos encontramos dentro de la nueva rama. A continuación:
  ![11](./images/11.png)

Seguidamente, creamos un fichero de texto como manera de cambio y diferentes a la rama "A", esta vez utilizare el comando "echo" para tener algo dentro de este texto, de forma más rápida. A cotninuación:

   ![12](./images/12.png)

Luego, adiciono mi cambios al staggin area con add y el commit correspondiente de mis cambios  que realice en la rama B (agregue imagenes, modifiwue una letra y cree un fichero). 

   ![13](./images/13.png)

Por último, hacemos un merge desde Git para unir los cambios de la rama B a la rama A, para eso volvemos ala rama A y hacemos "merge", a continuación: 

   ![14](./images/14.png)

5. Para poder agregar el commit FIX: issues 2 a nuestra rama A, primero ingresamoa la rama "hotfix/main", luego  mediante el comando log tenemos que identificar el hash del commmit, a continuación : 

    ![15](./images/15.png)

Luego, de saber el identificador ingresamos mediante el "cherry-pick" a ese identificador y vemos que una conflicto: 
    ![16](./images/16.png)

Seguidamente, ingresamos a nuestro fichero en conflicto y solucionamos co ayuda del IDE o manual combinado o borrando: 
    ![17](./images/17.png)


Luego, despues de solucionar podemos borrar el archivo: 
    ![18](./images/18.png)

Por último, comprobamos si existe algun conflicot otra vez y vemos si se agrego a nuestra rama A: 
    ![19](./images/19.png)


6. Para poder ejemplificar cambios simultaneos en la rama A y B, in hacer commit, utilizamos el comaando "git stash" que guarda de forma temporal cambios. Primero en la rama A, hacemos un cambio o modificación, para luego addicionarlo al staggin area y luego palciar  "git stash" que lo gurada temporalmente. A continuación: 
    ![20](./images/20.png)

Después, de igual manera en B, modificamos y guardamos: 
    ![21](./images/21.png)

Por último regresamos A, donde aplicamos con "git stash pop" lo que se guardo temporalmente y de iguala manera en B. Esto permite hacer cambios sin hacer commits de forma simultanea en ambas ramas. 
    ![22](./images/22.png)
    ![23](./images/23.png)

7. Para crear una versión debemos estar en la rama principal y  actualizada, a continuación:
    ![24](./images/24.png)

Luego,  creamos el tag y hacemos el push al repositorio.
    ![25](./images/25.png)


## EXTRAS

1. Para delvolver un fichero del staggin area al estado anterior podemos usar "git restore". Para este ejemplo crearemos un fichero de ejemplo "Extra.txt".
Luego, agregamos el ficheroa al Stagging area, pero si decidimos no inlcuir el fichero en el proximo commit. Podemos devolverlo al estado anterio con "git restor" con "--stage" nos indica que este archivo sera separado y dejado atras en el directorio sin cambios. 

![26](./images/26.png)


2. Para poder regresa a un commit anterior podemos utilizar el "git reset". Este comando nos permite movernos a la rama commit deseado y podemos elegir entren mantener o descartar los cambios en el directorio trabajo y el staggin area.

Para poder usar, primero, debemos obtener el hash o identificador del commit deseaso. 

Seguidamente, mediante este comando podemos elegir entre:

- "git reset --soft <id>, si quereemos mantener los cambios en el Staging area y el directorio de trabajo.
- "git reset --mixed <id>, si queremos mantener los cambios en el directorio de trabajo, pero quita los cambios del staging area.

- "git reset --hard <id>, si quereemos descartar todos los cambios del staging area y el directorio de trabajo.

![27](./images/27.png)