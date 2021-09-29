const express = require('express')
const morgam = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.set('port',process.env.PORT || 3000)

app.use(morgam('dev'))
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({  
    extended: true
}));

//** */
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({msg:"Hola "});
})

/**=========================================== */
router.post("/prueba/",(req,res)=>{
    let parser = require('../interprete/grammar');
    let Environment = require('../interprete/TableSymbol/Environment');
    let WriteLine = require('../interprete/Instrucciones/WriteLine');
    var environment = new Environment.default(); //Entorno Gobal
    var codigo = req.body.codigo;

    var consola = "";
    try{
        for(let m of parser.parse(codigo)){
            if ( m instanceof WriteLine.default){
                consola = consola + m.execute(environment) ;
            }else{
                m.execute(environment);
            }
        } 
    }catch(error){
        console.log(error);
    }

    res.json({msg:consola});
})
/**============================================ */

app.use(router);

app.listen(app.get('port'), () => {
    console.log('Server on Port 3000 :)')
})

