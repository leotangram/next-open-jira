# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- EL -d, significa **detached**

* MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

- Reconstruir los modulos de Node y levantar Next

```
yarn
yarn dev
```

## Configurar las variables de entorno
Renombrar el archivo **.env.template** a **.env**

## LLenar la base de datos con información de pruebas

Llamará:

```
http://localhost:3005/api/seed
```
