const express = require('express')
const app = express();
app.set('view engine','ejs')
app.use(express.static('public'));

app.get('/',(req, res) => {
    res.render('index.ejs',{name: "Yassine"})
});


const userRouter = require('./routes/users');
const router = require('./routes/users');

app.use('/users',router)



app.use(logger)
function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}


app.listen(3000);
