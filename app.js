const express = require('express')
const app = express()
const port = 7070

app.set('view engine', 'ejs')
app.use(express.static('src'))
app.use(express.static('public'))

app.get('/', (req, res) => {
  // redireciona para a rota /home
  res.redirect('/home')
})

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

app.get('/contatos', (req, res) => {
  res.render('contato')
})

app.listen(port, () => {
  console.log(`localhost:${port}`)
})

