const express = require('express');
const app = express();
const productRoute = require('./routes/products');
const userRoute = require('./routes/users');
const orderRoute = require('./routes/orders');
const ErrorHandling = require('./model/ErrorHandling');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {mongoURI} = require('./config/keys');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'OPTIONS, GET, POST, PUT, DELETE, PATCH');
    res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Accept, Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join(__dirname, 'uploads', 'images')));

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);

app.use((req,res,next)=> {
    next(new ErrorHandling('Specified route does not exist', 404));
})

app.use((error,req,res,next)=> {
    
    if(req.file) {
        fs.unlink(req.file.path, (err)=> {
            err && console.log(err);   
        })
    }
    const message = error.message || 'Unknown error occured';
    const status = error.status || 500;
    res.status(status).json({message});
})

mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> {
    app.listen(port, ()=> {
        console.log("Server is listening on port "+port);
    });
}).catch((err)=> console.log(err));

