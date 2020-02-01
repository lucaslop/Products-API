const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

app.use(express.json());

app.use(cors());

const url = process.env.MONGO_URL;
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Conectado com sucesso ao banco de dados.');
	}).catch((err) => {
		console.log("Houve um erro na conexão com o banco dados:" + err);
	});

app.use('/',require("./src/routes"));
const port = process.env.PORT || 3001;
app.listen(port);