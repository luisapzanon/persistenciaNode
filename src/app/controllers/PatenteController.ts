import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Patente from '../models/patente';

//parte 8 criar controller de patente
class PatenteController {

    async list(req: Request, res: Response){
        const repository = getRepository(Patente);
        const lista = await repository.find();
        return res.json(lista);
    }

    async store(req: Request, res: Response){
        const repository = getRepository(Patente);
        const j = repository.create(req.body); //cria a entidade Endereco
        await repository.save(j); //persiste a entidade na tabela.
        return res.json(j);
    }
}
export default new PatenteController();