require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configuracion global de routes
app.use(require('../server/routes/index'))

// Habilitar carpeta public
app.use(express.static(path.resolve(__dirname, '../public')))

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err) => {
  if (err) throw err
  console.log('Base de datos ONLINE')
})

app.listen(process.env.PORT, () => {
  console.log('Escuchando puerto: ', process.env.PORT)
})
