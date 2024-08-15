# Solución
![image](https://github.com/user-attachments/assets/f4c0cf61-705f-4380-9666-01f94b004d43)

![image](https://github.com/user-attachments/assets/b0ede97e-62ab-482b-971c-aeac50834e5c)

## Actividad 1: Genere una nueva rama A en base a main y agregar los ficheros que considere necesarios. (.js | .ts | .java | .cs | .html | etc).

##  Creamos la Rama “A” y después los ficheros con el comando echo, se crearon 3 ficheros

![image](https://github.com/user-attachments/assets/62cc6605-11de-4700-99f6-0045e68c8dd1)

![image](https://github.com/user-attachments/assets/4def7524-4cae-477a-af93-64b688bdf853)

![image](https://github.com/user-attachments/assets/a3331e12-0a46-47cd-8a9f-def8089ecb9b)

## Actividad 2: Restringir del historial de cambios a las carpetas /bin /node_modules y /target.

### Creamos con el comando touch el archivo .gitignore y ponemos las carpetas que no van a estar en el historial de cambios

![image](https://github.com/user-attachments/assets/1e8ddc58-7dff-4d62-b962-02d8d8dd56c3)

![image](https://github.com/user-attachments/assets/c5e6f41c-ce5a-486a-96e2-d933fcc03888)

![image](https://github.com/user-attachments/assets/d1a09984-aba9-4d40-88bb-9ed0e76a15ad)

## Actividad 3:  Generar 2 carpetas cualquiera sin contenido que sean incluidas en el historial de cambios.

### Se crean 2 carpetas vacías con el comando mkdir, pero al momento de querer incluirlas en el historial de cambios, 
### git no permite directorios vacíos, para esto le añadimos los archivos .gitkeep para que los cuente para el historial de cambios

![image](https://github.com/user-attachments/assets/96cf8309-eb4c-4dd8-8808-05c024374d5b)

![image](https://github.com/user-attachments/assets/62b49374-b80d-4c6d-b6f3-febd2b89e1fc)

![image](https://github.com/user-attachments/assets/336606e4-bd7e-4340-b8ca-5ec1ee860735)

## Actividad 4: Generar otra rama B para realizar nuevas modificaciones y luego integrar estos en la rama A.

### Creamos otra rama llamada “B” y creamos un archivo script_B, después ingresamos a la rama A y ponemos el comando git merge B, para que los cambios de B pasen a la rama A

![image](https://github.com/user-attachments/assets/76dc810e-b3d3-485b-8a81-6254137454df)

## Actividad 5: Integrar SOLO el commit con nombre "FIX: issue 2" de la rama hotfix/main en la rama A

###  Se utilizo el comando git cherry-pick para integrar el commit específico de la rama "hotfix/main", con git log Identificamos el hash del commit que quieres integrar. “Hubo un problema con el archivo main.py pues tenia caracteres erróneos  tales como “>>>>>>>>>” Se soluciono
### borrándolos llas líneas erróneas, se hizo un git add main.py y después un git cherry-pick-continue


![image](https://github.com/user-attachments/assets/f0e2746c-a574-431b-a0fe-b3e154885f1d)

![image](https://github.com/user-attachments/assets/b1e3c266-b293-4aca-bfe5-e155461fb088)

## Actividad 6: Ejemplifique el uso de git para la modificación de ficheros en la rama A y en la rama B simultaneamente sin generar commits en el historial de cambios.

### Para esto utilizáramos el stash, porque permite modificar ficheros sin que se agreguen commits al historial de cambio, Creamos 2 archivos txt para la rama A y B los añadimos al staging área y después ponemos git status para verificar, agregamos git stash para ocultar el archivo y después mas adelante se coloco git stash pop para volver a ver el archivo

![image](https://github.com/user-attachments/assets/d662d594-ca90-4c0e-89ab-9505ffd4269d)

![image](https://github.com/user-attachments/assets/c2815258-6659-4512-977f-7124a420fdc1)

![image](https://github.com/user-attachments/assets/aec28218-1f94-46c4-a681-c8c79a8f38f2)

![image](https://github.com/user-attachments/assets/ad5e18f1-a698-4f3a-8649-fe945ffaa600)

![image](https://github.com/user-attachments/assets/c6b85464-d3ba-4fdf-b9e4-326b4067a1b8)

![image](https://github.com/user-attachments/assets/a45a505a-4e93-4c6c-abf7-3db872c401dd)

## Actividad 7: Ejemplifique el uso de git para la generación y publicación de un nuevo release (versión) de su código

### Creamos un git tag llamada v1.0.0.0, verificamos el tag esta creado con el comando, “git tag”, después se hace un push para su creación el repositorio remoto

![image](https://github.com/user-attachments/assets/c7f92e1b-9116-4bdb-a55a-8e6c0830aa2e)


# Extras

## Ejemplique el uso de git para devolver un fichero del staging area al estado anterior.

### Se crearon 2 archivos txt y se le agregaron contenido, se les hizo un git add y un commit para estar en el repo local, así mismo después a los archivos se le agregaron mas contenido, y se le puso un git add para que estén un el staging área. Despues para devolver el archivo 1 al estado anterior se usó el comando “git restore –staged” y para deshacer también los cambios realizados en el archivo1 se utilizó “git restore” 

![image](https://github.com/user-attachments/assets/c9070aa3-a8b3-42c5-a497-e2787718f248)

![image](https://github.com/user-attachments/assets/aa3085a1-19c8-47cc-95f3-146c74d45345)

![image](https://github.com/user-attachments/assets/3fd6614d-4a6b-4c28-a03e-e736bd1b5c02)

![image](https://github.com/user-attachments/assets/11c22a13-1247-4f55-a28b-8f293f277f82)

![image](https://github.com/user-attachments/assets/061fa0cd-b176-4f15-b138-73b646acc927)

 ![image](https://github.com/user-attachments/assets/f3455630-32e3-408a-8998-f6a23531a005)

 ![image](https://github.com/user-attachments/assets/d01e8066-d99e-4616-9c65-7eeb42817cb9)

 ![image](https://github.com/user-attachments/assets/9e757793-5ef4-442f-b754-8e5b89fabdba)

 ## Ejemplifique el uso de git para regresar en el tiempo hacia un commit anterior en la rama A de su repositorio remoto propio.

### Se desea regresar al commit 24f0ad6 (con el mensaje "FIX: issue 2"), cuando ya se tenga el hash del commit al que deseas regresar, se usa el comando reset, que el repositorio local vuelva al estado del commit 24f0ad6, lo malo que el comando “hard” borra los commits posteriores. Por último el comando “git push origin A --force” forzará la actualización de la rama A en el repositorio remoto para que coincida con la versión local que ahora apunta al commit 24f0ad6.

 ![image](https://github.com/user-attachments/assets/8a7b407c-81de-4e12-a40c-db4e9ed081b0)




