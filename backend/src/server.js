const express = require('express')
const ConfigEngine = require('./config/ViewEngine')
const initWeb = require('./routes/web')
const initApiRouter = require('./routes/api')
const cookieParser = require('cookie-parser')
const Cors = require('./config/cors')
require('dotenv').config()
const session = require('express-session')
// require('./config/connectDB')
const app = express()
const port = process.env.PORT || 8000
const host = process.env.HOST_NAME || 'localhost'


Cors(app)
ConfigEngine(app)

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));


initWeb(app)
initApiRouter(app)


app.use((req, res) => {
    return res.send('404 not found')
})



app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`)
})