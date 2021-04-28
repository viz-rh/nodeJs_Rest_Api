const express = require("express");
const morgan = require("morgan");

const app = express();

//setings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//midlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));

//starting server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})