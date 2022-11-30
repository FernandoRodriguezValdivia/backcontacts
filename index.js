const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/',async(req, res) => {
  //send notification to all devices
    res.json({msg: 'Hola server'})

})


app.post('/',async(req, res) => {
	const body = req.body
	console.log(JSON.stringify(body))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})