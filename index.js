import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'
import path from 'path'



const app = express()

const __dirname = path.resolve()

const startServer = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('😎 Database has connected successfully')

    app.use(express.static(`${__dirname}/front-end/build`))

    // logger middleware
    app.use((req, _res, next) => {
      console.log(`Incoming ${req.method} request to ${req.url}`)
      next()
    })

    // body parser
    app.use(express.json())

    // * middleware for router to handle incoming requests
    app.use('/api', router)

    app.use('/*', (_, res) => res.sendFile(`${__dirname}/front-end/build/index.html`))

    app.listen(port, () => console.log(`🚀 Express is up and running  on port ${port}`))
  } catch (err) {
    console.log(err)
    console.log('something has gone wrong!')
  }
}
startServer()
