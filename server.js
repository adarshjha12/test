let express = require('express')
let app = express()
let path = require('path')
let hbs = require('hbs')

app.set('view engine', 'hbs')
app.set('views', __dirname)
app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(3000, () =>{
    console.log('running on 3000');
})