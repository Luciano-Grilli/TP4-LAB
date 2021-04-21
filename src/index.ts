import express from "express";
import { Empleado } from "./entidad/Empleado";
import { crearEmpleado, getEmpleado, getEmpleados } from "./querys";
import routes from './routes/routes';

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);
app.listen(3000, ()=> console.log("Servidor en puerto 3000", 3000));

app.set('view engine', 'hbs')

var getAll = getEmpleados()    
var getOne
var create
var update
     
//const emplea = getEmpleados();
app.get('/',(req,res)=> {
    var emp :any= [];
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    //console.log(Promise.resolve(getEmpleados()))
    getAll.then(val =>{
        emp= val;
        console.log(emp)
        
        res.render(
            'index',
            {emp: emp}
        )
    })

});
app.get('/getOneEmpleado',(req,res)=> {
    var emp :any= [];
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    //console.log(Promise.resolve(getEmpleados()))
    getAll.then(val =>{
        emp= val;
        console.log(emp)
        
        res.render(
            'unEmpleado',
            {emp: emp}
        )
    })

});

app.get('/crear',(req,res)=> {
    res.render(
        'crear',
        {Empleados: "CREAR "}
    )
});

app.get('/editar/',(req,res)=> {
    res.render(
        'editar',
        {Empleado: Empleado}
    )
});

