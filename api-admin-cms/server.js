import "dotenv/config";
import express from 'express';
const app = express();
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

const PORT = process.env.PORT || 8000;

// use middlewares
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

// mongodb connect


// routers

app.get("/", (req, res) => {
    res.json({
        message: "You have reached the admin api"
    })
})

// error handling

app.get((err, req, res, next) => {
    console.log(error)
    res.json({
        status: "error",
        message: err.message
    })
})


// bound app with the port to serve on the internet
app.listen(PORT, error => {
    error ? console.log(error) : console.log(`server is running on http://localhost:${PORT}`)
})