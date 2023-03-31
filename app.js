const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('src'))

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/adote', (req, res) => {
  res.render('adote')
})

app.get('/quem-somos', (req, res) => {
    res.render('quem-somos')
})

app.get('/como-adotar', (req, res) => {
    res.render('como-adotar')
})

app.listen(port, () => {
  console.log(`localhost:${port}`)
})

