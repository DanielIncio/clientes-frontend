# Clientes Frontend

Aplicación web hecha con Angular que consume la API [clientes-api](https://github.com/DanielIncio/clientes-api) para gestionar clientes.

## Tecnologías

- Angular 19
- TypeScript 5.7
- HttpClient para consumir la API REST

## Funcionalidades

- Listado de clientes
- Crear, editar y eliminar clientes
- Formularios con `ngModel`

## Cómo ejecutarlo

### Requisitos

- Node.js 20 o superior (probado con 22.15.1) y npm
- Angular CLI (`npm install -g @angular/cli`)
- El backend [clientes-api](https://github.com/DanielIncio/clientes-api) corriendo en `http://localhost:8080`

### Pasos

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DanielIncio/clientes-frontend.git
   cd clientes-frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Revisa que la URL de la API apunte a tu backend en src/app/clientes/clientes.service.ts.
4. Inicia la aplicación:
   ```bash
   ng serve
   ```
5. Abre `http://localhost:4200` en el navegador.


## Estructura del proyecto

```
interfaces/   → modelos tipados (Cliente, Usuario)
services/     → servicios que consumen la API (CrudService y derivados)
components/   → pantallas y formularios
```

## Qué aprendí

- Consumo de una API REST desde Angular con servicios y `HttpClient`
- Interfaces de TypeScript para tipar los datos
- Un servicio genérico (`CrudService`) para reutilizar el CRUD
- Integración de un frontend con un backend protegido con JWT

## Autor

**Daniel Incio** · [GitHub](https://github.com/DanielIncio)
