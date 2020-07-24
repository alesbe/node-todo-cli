# NodeJS CLI TO-DO list
Esta aplicación ha sido creada con fines prácticos en la realización de un curso de NodeJS.

Es una aplicación que te permite tener tu propia lista de tareas y operar con ella.

Las tareas se guardan en un archivo JSON, por lo que se guardan después de cerrar el programa.

![TODO]
(https://imgur.com/a/YqTXTx5)

## Instalación
Dentro de la carpeta del proyecto, instalar dependencias:

```
npm install
```

## Uso
```
node app [comando] [argumentos]
```

## Comandos

### help
Muestra la ayuda de la aplicación.

```
node app help
```

### crear
Crea una nueva tarea.

```
node app crear -d
```
### actualizar
Actualiza el estado de una tarea.

```
node app actualizar -d [-c = true]
```

### listar
Muestra la lista de tareas.

```
node app listar
```

### borrar
Borra una tarea de la lista

```
node app borrar -d
```

## Argumentos

### -descrpcion
Especifica el nombre de la tarea

Alias: `-d`

### -completado
Especifica el estado de la tarea

Alias: `-c`