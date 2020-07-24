const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const { actualizar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);

        try {
            console.log('Tarea creada con éxito.'.bold.green);
        } catch (error) {
            console.log('La tarea no se ha podido crear'.bold.red);
        }
        break;

    case 'listar':
        let listado = porHacer.listar();

        if (listado.length > 0) {
            for (let tarea of listado) {
                console.log('========TODO========'.green);

                console.log('Tarea: '.bold.yellow, tarea.descripcion);

                if (tarea.completado) {
                    console.log('Estado: '.bold.yellow, 'Completada'.bold.bgGreen);
                } else {
                    console.log('Estado: '.bold.yellow, 'No completada'.bold.bgRed);
                }

                console.log('===================='.green);
            }
        } else {
            console.log('La lista está vacía.'.bold.yellow);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log('Tarea actualizada con éxito.'.bold.green);
        } else {
            console.log('La tarea no ha podido ser actualizada'.bold.red);
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);

        if (borrado) {
            console.log('La tarea ha sido eliminada de la lista.'.bold.green);
        } else {
            console.log('La tarea no se ha podido eliminar de la lista.'.bold.red);
        }

        break;

    default:
        console.log('Comando desconocido');
        break;
}