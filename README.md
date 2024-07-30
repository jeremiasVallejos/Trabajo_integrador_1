# Primer proyecto integrador Desarrollador BackEnd

 Este proyecto integrador esta basado en NodeJs y MongoDB, busca permite gestionar recursos en la base de datos de productos, incluyendo la creación, edición, eliminación y búsqueda de registros.

 ## Instalación

```shell
npm install
```
## Configuración
Crea un archivo **.env** en la raíz del proyecto y agrega las siguientes variables de entorno, en la raíz del proyecto también tenemos un ejemplo de **.env**

```shell
DB_CONNECTION_STRING=<tu_conexion_a_MongoDB>
PORT=3000
```

## Ejecución
```shell
npm run dev
```

## Uso
### Endpoints disponibles
* Crear un producto:
    ```javascript
    POST /products/create
    ```
    Cuerpo de la solicitud:

    ```json
    {
        "nombre": "Coca Cola",
        "precio": 300,
        "categoria": "Bebida"
    }
    ```
    Respuesta de la exitosa de la solicitud:
     ```json
    {
        "message": "Se creo el producto con el código 7696 satisfactoriamente"
    }
     ```

---

* Obtener todos los productos:

    ```javascript
    GET /products/all
    ```
    Respuesta de la exitosa de la solicitud:
    La respuesta de la solicitud es un array de objectos

---

* Obtener el producto por código:

    ```javascript
    GET /products/code/9012
    ```
    Respuesta de la exitosa de la solicitud:
     ```json
       {
            "_id": "669bf2c67e3d854bb666bea5",
            "codigo": 9012,
            "nombre": "Detergente",
            "precio": 8.75,
            "categoria": "Limpieza"
       }
     ```

---

* Obtener el producto por nombre:

    ```javascript
    GET /products/name/cereal
    ```
    Respuesta de la exitosa de la solicitud:
     ```json
        {
            "_id": "669bf2c67e3d854bb666beb6",
            "codigo": 9876,
            "nombre": "Cereal",
            "precio": 4.99,
            "categoria": "Comestible"
        }
     ```

---

* Editar el precio de un producto por código:

    ```javascript
    GET /products/update/9876
    ```

     Cuerpo de la solicitud:

    ```json
    {
        "precio": 300,
    }
    ```

    Respuesta de la exitosa de la solicitud:
     ```json
    {
        "message": "Se modificó el precio satisfactoriamente"
    }
     ```
     
---

* Eliminar un producto por código:

    ```javascript
    GET /products/delete/9876
    ```

    Respuesta de la exitosa de la solicitud:
     ```json
    {
        "message": "El producto se elimino satisfactoriamente"
    }
     ```