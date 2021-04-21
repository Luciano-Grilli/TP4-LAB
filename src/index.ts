import express from "express";
import { Empleado } from "./entidad/Empleado";
import { crearEmpleado, getEmpleado, getEmpleados } from "./Querys";
import routes from './routes/routes';

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);
app.listen(3000, ()=> console.log("Servidor en puerto 3000", 3000));

app.set('view engine', 'hbs')

   

     
//const emplea = getEmpleados();
app.get('/',(req,res)=> {
    var getAll = getEmpleados() 
    var emp :any= [];
    getAll.then(val =>{
        emp= val;
        //console.log(emp)
        
        res.render(
            'index',
            {emp: emp}
        )
    })

});

/*
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
*/

app.get('/crear',(req,res)=> {
    res.render(
        'crear',
        {asd: "CREAR "}
    )
});

app.get('/editar/:id',(req,res)=> {
    var getAll = getEmpleados()
    var id =parseInt(req.params.id);
    console.log(id);
    var emp :any = [];
    var OneEmpleado:any=[];
    
    getAll.then(val =>{
        emp = val;

        
        OneEmpleado = emp.filter((e:Empleado) =>{
            if (e.id == id) {
                return e;
            }
        })
        
        
        //console.log(OneEmpleado[0])
       
        res.render(
            'editar',
            {OneEmpleado: OneEmpleado[0]}
        )
        
    })

});

app.get('/eliminar/:id',(req,res)=> {
    
    var id =parseInt(req.params.id);
    
        console.log('id--'+id)
        res.render(
            'eliminar',
            {id: id}
        )
        
    

});


