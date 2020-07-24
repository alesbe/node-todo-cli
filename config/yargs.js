const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    desc: 'Estado de la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('listar', 'Muestra la lista de tareas')
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}