const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 

const port = process.env.PORT || 3000

app.use(bodyParser());
app.use(express.static('public'))

app.post('/', (req, res) => {
	
	console.log("**********************Starting things up, giving info about changes**********************")
	console.log(req.headers)
	
	
});

app.listen(port, () => console.log(`App listening on port ${port}!`))