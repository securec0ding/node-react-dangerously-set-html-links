import express from 'express'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'

import bodyParser from 'body-parser'
import routes from './server/api'

const app = express()
app.use(cors())

/** MIDDLEWARE */
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/** API ROUTES */
app.get('/api/posts', routes.viewPosts)
app.post('/api/posts', routes.addNewPost)
app.get('/api/posts/:id', routes.getPost)

/** Send the contents of the build folder as static files */
app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

const PORT = process.env.VIRTUAL_PORT || 8080
// runs on port 8080 in dev so that react-scripts can hot-reload on port 3000 for easier development
app.listen(PORT, () => {
  console.log('App running on port 8080')
})