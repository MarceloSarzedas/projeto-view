import express from 'express';
import cors from 'cors';

import { cadastraLead } from './cadastro.js';
import { validaUsuario } from './valida.js';

const app = new express();

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
	const nome = req.body.nome;
	const email = req.body.email;
	const telefone = req.body.telefone;

	const usuarioValido = validaUsuario(nome, email, telefone);

	if(usuarioValido.status) {
		await cadastraLead(nome, email, telefone);
		res.status(204).end();
	} else {
		res.status(400).send({mensagem: usuarioValido.mensagem});
	}
});

app.listen(9000, async () => {
	console.log("Servidor Iniciado");
});