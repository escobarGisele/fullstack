const express= require('express');
const morgan= require('morgan');
const multer= require('multer');
const path= require('path');
//inicializaciones
const app= express();

//configuraciones
app.set('port', 3000);

//middelwares
app.use(morgan('dev'));
multer.diskStorage({
    destination: path.join(__dirname,'public/uploads')
});
//start server
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'))
});