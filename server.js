const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 

const port = process.env.PORT || 3000

app.use(bodyParser());
app.use(express.static('public'))

app.post('/', (req, res) => {
	
	console.log(req.headers)
	console.log(req.header)
	console.log(Object.keys(req))
	console.log(JSON.stringify(req.body,null,4));
	res.send(req.body);
	
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))