// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ============================
//  Base de datos
// ============================
let urlDB

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe'
} else {
  urlDB = 'mongodb://cafe-user:Qwerty123@ds133388.mlab.com:33388/heroku_hp26j875'
}
process.env.URLDB = urlDB
