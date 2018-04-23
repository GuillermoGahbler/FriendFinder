const express = require('express')
const apiRouter = require("./app/router/apiRoutes")
const port = process.env.PORT || 3000;
const parser = require('body-parser');



const serverSuccess = (port) =>
    console.log(`server is running on http://localhost:${port}`)





const app = express();

app.use(parser.urlencoded({extended:false}))


app.use(express.static('app/public'))
app.use('/api',apiRouter);

app.use((err,req,res,next) => res.sendStatus(404))


app.on("error", (err) => console.error(err))
app.listen(port, serverSuccess(port))










