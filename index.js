const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'front-end-react', 'build')))

app.get('/one', (req, res) => {
  res.send('Hello')
})

app.get('/api', (req, res) => {
  res.json({
    one: "Hello "
  })
})

function RouteFunc(app){
  app.get('/api/test', (req, res) => {
    res.json({
      one: "Hello test"
    })
  })
  
}

RouteFunc(app)

app.listen(port, () => {
  console.log(`server started listening on port: ${port}`)
})