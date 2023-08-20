CREATE DATABASE IF NOT EXISTS rutas 

USE rutas;

CREATE TABLE
    IF NOT EXISTS users (
        email VARCHAR(255) NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        cellphone VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE DATABASE IF NOT EXISTS rutas 

USE rutas;

CREATE TABLE
    IF NOT EXISTS ruta (
        fecha DATE NOT NULL,
        tipo_vehiculo VARCHAR(255) NOT NULL,
        hora_salida VARCHAR(255) NOT NULL,
        cupos_disponibles VARCHAR(255) NOT NULL,
        origen VARCHAR(255) NOT NULL,
        destino VARCHAR(255) NOT NULL,
        usuario_id VARCHAR(255) NOT NULL
    );