const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 

const port = process.env.PORT || 3000

app.use(bodyParser());
app.use(express.static('public'))

app.post('/', (req, res) => {
	
	res.send(req.body);
	console.log(JSON.stringify(res.body,null,4));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))