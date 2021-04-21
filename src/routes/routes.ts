import {Router} from 'express';
import {getEmpleados, crearEmpleado, getEmpleadoXId,eliminarEmpleado, updateEmpleado} from '../controller/controller';

const ruta = Router();

//ruta.get('/test', (request, response)=>response.send('Respuesta exitosa'));



ruta.get('/empleados', getEmpleados);
ruta.get('/empleados/:id', getEmpleadoXId);
ruta.post('/insertar', crearEmpleado);
ruta.put('/actualizar/:id', updateEmpleado);
ruta.delete('/eliminar/:id', eliminarEmpleado);


export default ruta;