const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('Error al guardar los datos en la BD', err);
        }
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (err) {
        //Si el JSON está vacío
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const listar = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    try {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } catch (error) {
        return false;
    }

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}