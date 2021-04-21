import { Empleado } from "./entidad/Empleado";


export async function getEmpleados(){
    const fetch = require('node-fetch');

    const response = await fetch('http://localhost:3000/empleados');
    const data = await response.json();
    
    let list:Empleado[] = [];
    try {
        let empleados = JSON.parse(JSON.stringify(data));
        
        //console.log(empleados);
        empleados.map( (emp:Empleado) => {
            let {id,nombre,apellido,dni,fechaIngreso,activo,sector} = emp;
            let empleado ={id,nombre,apellido,dni,fechaIngreso,activo,sector};
            list.push(empleado);
        });
        
        //console.log(list);
        return list;
    } catch (error) {
        return console.log(error)
    }
    
}   

export async function getEmpleado(empleado:Empleado){
    const fetch = require('node-fetch');

    const response = await fetch(`http://localhost:3000/empleados/${empleado.id}`);
    const data = await response.json();
    
    let list:Empleado[] = [];
    try {
        let empleados = JSON.parse(JSON.stringify(data));
        
        //console.log(empleados);
        empleados.map( (emp:Empleado) => {
            let {id,nombre,apellido,dni,fechaIngreso,activo,sector} = emp;
            let empleado ={id,nombre,apellido,dni,fechaIngreso,activo,sector};
            list.push(empleado);
        });
        
        //console.log(list);
        return list;
    } catch (error) {
        return console.log(error)
    }
    
}  

export async function crearEmpleado(id:number, nombre:string, apellido: string, dni:number ,fechaIngreso:string ,activo: boolean, sector:string){
    const fetch = require('node-fetch');

    const body = {id,nombre,apellido,dni,fechaIngreso,activo,sector};

    const response = await fetch('http://localhost:3000/insertar', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();

    console.log(data);
    
}


export async function updateEmpleado(empleado:Empleado){
    const fetch = require('node-fetch');

    const body = empleado;

    const response = await fetch(`http://localhost:3000/actualizar/${empleado.id}`, {
        method: 'put',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();

    console.log(data);
    
}  

export async function deleteEmpleado(empleado:Empleado){
    const fetch = require('node-fetch');

    const body = empleado;

    const response = await fetch(`http://localhost:3000/eliminar/${empleado.id}`, {
        method: 'delete',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();

    console.log(data);
    
} 

