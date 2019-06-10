const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 

const port = process.env.PORT || 3000

app.use(bodyParser());

app.post('/', (req, res) => {
	
	res.send(req.body);
	
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))