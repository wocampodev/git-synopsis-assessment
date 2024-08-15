# Solución

# Antes de las actividades:

1. Hice “fork” presionando el botón en la parte superior derecha:

    ![1](./images/1.jpeg)

2. He creado el fork en mi cuenta: 

    ![2](./images/2.jpeg)

3. Inicializo git en mi pc, y clono la dirección:

    ![3](./images/3.jpeg)

## Actividad 1

1. Agrego los archivos necesarios:

    ![4](./images/4.jpeg)

2. Agrego con la rama main

    ![5](./images/5.jpeg)

3. Creo mi Rama A, hago merge:

    ![6](./images/6.jpeg)

4. Reviso con git log –oneline para ver el historial completo, y hago push en A

    ![7](./images/7.jpeg)
  
5. Reviso mi repositorio remoto y visualizo la creación del Branch y lo agregado:

    ![8](./images/8.jpeg)
    ![9](./images/9.jpeg)
 
# Actividad 2:
1. Creo el archivo “.gitignore”, edito y hago push:

    ![10](./images/10.jpeg)
    ![11](./images/11.jpeg)
 
# Actividad 3:
1. Creo mis carpetas vacias con el git Bush:

    ![12](./images/12.jpeg)
 
2. Y dentro de cada uno creo el archivo “.gitkeep” para que a pesar que no tengan archivos, sean incluidas en el historial de cambio:

    ![13](./images/13.jpeg)

# Actividad 4
1. Creo una nueva rama B y las integro en la rama A.
 
    ![14](./images/14.jpeg)

# Actividad 5
1. Primero que todo, como no existe en el remoto, he creado la rama hotfix/main.
 
    ![15](./images/15.jpeg)
    ![16](./images/16.jpeg)

2. Verifico el commit creado:
 
    ![17](./images/17.jpeg)

3. Integro solo el commit a la rama A:

    ![18](./images/18.jpeg)

# Actividad 6
1. Para esto vamos a usar “git stash”. Modifico los archivos en la rama A y B.

    ![19](./images/19.jpeg)
    ![20](./images/20.jpeg)
   
2. Agrego y pongo git stash para guardarlo en el directorio de trabajo

    ![21](./images/21.jpeg)
 
3. Luego “git stash pop”, y aparece el archivo, sin necesidad de agregar “commit”
 
    ![22](./images/22.jpeg)

# Actividad 7
1. Agrego una versión a mi proyecto con el “git tag”

    ![23](./images/23.jpeg)
 
2. Subo y reviso la creación de mi versión:

    ![24](./images/24.jpeg)
    ![25](./images/25.jpeg)
 
3. Creo un Release

    ![26](./images/26.jpeg)
    ![27](./images/27.jpeg)
  
# ACTIVIDADES EXTRAS:

# EXTRA 1:
1. Agregué un archivo al staging área.

    ![28](./images/28.jpeg)

2. Lo modifiqué, e hice commit; luego deshice los cambios y lo devolví al directorio y al final se revirtió al estado del último commit

    ![29](./images/29.jpeg)
 
# EXTRA 2:
1. Primero voy a mi rama A, y veo los commits, y como no quiero que se elimine todos los cambios uso “git reset --soft”

    ![30](./images/30.jpeg)
 
