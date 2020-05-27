const express = require('express');
const app = express();
const productRoute = require('./routes/products');
const ErrorHandling = require('./model/ErrorHandling');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {mongoURI} = require('./config/keys');
const port = 5000 || process.env.PORT;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'OPTIONS, GET, POST, PUT, DELETE, PATCH');
    res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Accept, Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());

app.use('/api/products', productRoute);

app.use((req,res,next)=> {
    next(new ErrorHandling('Specified route does not exist', 404));
})

app.use((error,req,res,next)=> {
    res.status(error.status).json({message: error.message});
})

mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> {
    app.listen(5000, ()=> {
        console.log("Server is listening on port "+port);
    });
}).catch((err)=> console.log(err));

