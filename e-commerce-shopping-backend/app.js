const express = require('express');
const app = express();
const productRoute = require('./routes/products');
const ErrorHandling = require('./model/ErrorHandling');
const bodyParser = require('body-parser');

const port = 5000 || process.env.PORT;

app.use(bodyParser.json());

app.use('/api/products', productRoute);

app.use((req,res,next)=> {
    next(new ErrorHandling('Specified route does not exist', 404));
})

app.use((error,req,res,next)=> {
    res.status(error.status).json({message: error.message});
})
app.listen(5000, ()=> {
    console.log("Server is listening on port "+port);
});

