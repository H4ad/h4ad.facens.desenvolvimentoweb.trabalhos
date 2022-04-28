//#region Imports

import { Express, Request, Response } from 'express';

//#endregion

export function setupDefaultRoutes(app: Express/*, _: Connection*/): void {
  let clients: any[] = [];

  app.get('/', async (_, res: Response) => {
    res.json({
      mensagem: 'Consulta realizada',
    });
  });

  app.post('/cadastracliente', (req: Request, res) => {
    const name = req.body.nome;
    const phone = req.body.telefone;

    if (!name)
      return res.status(422).json({ mensagem: 'O campo de nome é obrigatório.' });

    if (!phone)
      return res.status(422).json({ mensagem: 'O campo de telefone é obrigatório.' });

    clients.push({
      id: clients.length + 1,
      name,
      phone,
    });

    return res.status(201).json({
      mensagem: `Cliente ${ name } cadastrado com o telefone ${ phone }.`,
    });
  });

  app.delete('/deletacliente/:id', (req: Request, res) => {
    const id = Number(req.params.id);
    const client = clients.find(client => client.id === id);

    if (!client)
      return res.status(404).json({ mensagem: 'O cliente com esse ID não foi encontrado.' });

    clients = clients.filter(client => client.id !== id);

    return res.status(200).json({ mensagem: 'O cliente foi removido com sucesso.' });
  });

}
