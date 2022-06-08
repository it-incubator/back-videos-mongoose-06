import express from 'express'
import {runDb} from './2-repositories/db'
import {usersRouter} from './0-routes/users-router'

// create express app
const app = express()
app.use(express.json());

const port = process.env.PORT || 5000

app.use('/users', usersRouter)

const startApp = async () => {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port: ${port}`)
    })
}

startApp()
