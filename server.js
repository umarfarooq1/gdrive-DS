const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.post('/', (req, res) => {
	res.send(req.body);
	//console.log(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))