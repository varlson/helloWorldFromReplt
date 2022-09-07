const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
  res.status(200).json({
    message: 'Hello World'
  })
})

app.post('/login', (req, res)=>{
  const {username, password} = req.body

  res.status(200).json({
    content:{username, password}
  })
})


app.listen(5000, (req, res)=>{
  console.log('Server running at 5000')
})  