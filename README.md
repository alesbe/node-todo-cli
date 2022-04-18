# NodeJS CLI TODO list
TODO list made with NodeJS in a console user interface.

![TODO](https://i.imgur.com/uZb6zTj.png)

## Install
Inside project folder, install dependencies:

```
npm install
```

## Usage
```
node app [command] [arguments]
```

## Commands

### help
Shows command help

```
node app help
```

### crear
Creates a new task

```
node app crear -d
```
### actualizar
Update the state of a task

```
node app actualizar -d [-c = true]
```

### listar
Shows task list

```
node app listar
```

### borrar
Delete a task from the list

```
node app borrar -d
```

## Arguments

### -descripcion
Specifies the description of a task

Alias: `-d`

### -completado
Specifies the state of the task

Alias: `-c`
