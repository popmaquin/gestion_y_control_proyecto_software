CREATE DATABASE DBcontroldecalidad;
use DBcontroldecalidad;

CREATE TABLE `proyecto` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(260),
  `descripcion` text,
  `fecha_inicio` date,
  `fecha_fin` date,
  `estado` ENUM ('planificado', 'en_progreso', 'completado')
);

CREATE TABLE `planesprueba` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_proyecto` int,
  `nombre` varchar(260),
  `descripcion` text,
  `fecha_creacion` date
);

CREATE TABLE `casosPrueba` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_plan_prueba` int,
  `nombre` varchar(260) NOT NULL,
  `descripcion` text,
  `datos_prueba` json,
  `criterios_aceptacion` text
);

CREATE TABLE `ejecucionPrueba` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_caso_prueba` int,
  `fecha_ejecucion` date,
  `estado` ENUM ('pendiente', 'exitoso', 'fallido'),
  `evidencia` text
);

CREATE TABLE `defecto` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_ejecucion_prueba` int,
  `descripcion` text,
  `asignar_a` varchar(260),
  `fecha_reporte` date,
  `fecha_resolucion` date,
  `estado` ENUM ('abierto', 'en_progreso', 'resuelto', 'cerrado')
);


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- Identificador único del usuario
    nombre VARCHAR(100) NOT NULL,               -- Nombre del usuario
    email VARCHAR(150) NOT NULL UNIQUE,         -- Correo electrónico (único)
    contraseña VARCHAR(255) NOT NULL,           -- Contraseña encriptada
    rol ENUM('admin', 'usuario') DEFAULT 'usuario', -- Rol del usuario (admin o usuario)
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha y hora de creación
);


//Se crean las relaciones de cada tabla.
ALTER TABLE `planPrueba` ADD FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id`);
ALTER TABLE `casosPrueba` ADD FOREIGN KEY (`id_plan_prueba`) REFERENCES `planPrueba` (`id`);
ALTER TABLE `ejecucionPrueba` ADD FOREIGN KEY (`id_caso_prueba`) REFERENCES `casosPrueba` (`id`);
ALTER TABLE `defecto` ADD FOREIGN KEY (`id_ejecucion_prueba`) REFERENCES `ejecucionPrueba` (`id`);


INSERT INTO proyecto VALUES
('proyecto1', 'Inicio del proyecto', '29/11/2024', '29/12/2024', 'Pendiente');
