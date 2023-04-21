# GitHub Social Login Implementation

Este proyecto fue desarollado para Hackathon - **JOBarcelona'23 | Backend**

Este proyecto implementa la estrategia de autenticación de GitHub y permite a los usuarios registrarse en el sitio web utilizando su cuenta de GitHub. Además, proporciona endpoints para mostrar todos los usuarios registrados y para dar "star" a un repositorio.

## Instalación
1. Clonar el repositorio: 
```
git clone https://github.com/IuliiaNova/job-barcelona23-backend
```

2. Instalar dependencias: `npm install`

3. Crear un archivo **.env** en la raíz del proyecto y agregar las siguientes variables de entorno:

**Copy code**
> - *GITHUB_CLIENT_ID*=<tu_client_id>
> - *GITHUB_CLIENT_SECRET*=<tu_client_secret>
> - *GITHUB_CALLBACK_URL*=http://localhost:`${PORT}`/user/auth/github/callback
> - *SESSION_SECRET*=<tu_session_secret>
> - *DB_URI*=<tu_db_uri>
> - *PORT*={YOUR_PORT}
> - *MONGODB_URI*={YOUR_MONGODB_URI}

*GITHUB_CLIENT_ID y GITHUB_CLIENT_SECRET* son las credenciales de autenticación de GitHub que se deben obtener en el portal de desarrolladores de GitHub.

*GITHUB_CALLBACK_URL* es la URL de callback que se debe configurar en el portal de desarrolladores de GitHub.

*SESSION_SECRET* es una clave secreta que se utiliza para firmar la sesión de usuario.

*MONGODB_URI* es la URL de conexión de la base de datos que se va a utilizar.


## Uso
Para ejecutar la aplicación, simplemente ejecute el siguiente comando:
```
npm start
```
Esto iniciará el servidor en el puerto que has puesto en tu documento .env.

### Endpoints
- GET /: Muestra el mensaje de bienvenida,
- GET /user/allusers: Muestra todos los usuarios registrados,
- GET /user/auth/github: Inicia el proceso de autenticación de GitHub,
- GET /user/auth/github/callback: Callback que se utiliza después de que el usuario ha sido autenticado por GitHub.
- POST /star/:repositoryName: Da "star" a un repositorio especificado por su ID.

## Protección de rutas
Se ha implementado un middleware para proteger las rutas que requieren autenticación. Si el usuario intenta acceder a estas rutas sin haber iniciado sesión, se redireccionará automáticamente a la página de autenticación de GitHub.

## Calidad de código

### Contribución
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio y crear una pull request con tus cambios.

### Desarrolladora
Para ver mas mis proyectos os envito a visitar mi GitHub (Iuliia Shikhanova)[https://github.com/IuliiaNova]