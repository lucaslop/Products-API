const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

app.use(express.json());

app.use(cors());

const url = "mongodb://mongo/questmark";
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Conectado com sucesso ao banco de dados.');
	}).catch((err) => {
		console.log("Houve um erro na conexão com o banco dados:" + err);
	});

app.use('/',require("./src/routes"));

app.listen(3000);