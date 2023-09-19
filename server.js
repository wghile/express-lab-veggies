const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine') 

//data
const vegetables = require('./models/vegetables.js')

//adding our view templates
  app.set('view engine', 'jsx');
  app.engine('jsx', jsxEngine());

//Middleware
    app.use((req, res, next) => {
        console.log('I run for all routes')
        next()
    })

    app.use(express.urlencoded({extended: false})) 

//Routes --> INDUCES
    //Index Route
    app.get('/vegetables', (req, res) => {
        res.render('Index', {vegetables: vegetables})
    })

    //New Route
    app.get('/vegetables/new', (req, res) => {
        res.render('New')
    })

    //Delete Route
    //Update Route

    //Create Route
    app.post('/vegetables', (req, res) => {
        console.log(req.body)
        if(req.body.readyToEat === 'on'){
            req.body.readyToEat = true
        }else{
            req.body.readyToEat = false
        }
        vegetables.push(req.body)
        res.redirect('/vegetables')
    })
    //Edit Route

    //Show route - one particular vegetable by ID
    app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
        res.render('Show', {vegetable: vegetables[req.params.indexOfVegetablesArray]})
    })

app.listen(3000, () => {
    console.log('listening');
});