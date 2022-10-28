import { Router } from 'express'; // parte 1 - importa o Router do pacote express
import JogadorController from './app/controllers/JogadorController'; // parte 2 - importa o controller do jogador

import AuthController from './app/controllers/AuthController'; // parte 3 - importa o controller de autenticação

import EnderecoController from './app/controllers/EnderecoController'; // parte 6

//parte 8
import PatenteController from './app/controllers/PatenteController';
import CompraController from './app/controllers/CompraController';
import ArtefatoController from './app/controllers/ArtefatoController';



const router = Router(); // parte 1 - instancia o router na const router

//parte 6 - alteração nas rotas
router.post('/jogador/store', JogadorController.store);
router.post('/jogador/update', JogadorController.update);
router.post('/jogador/delete', JogadorController.delete);
router.post('/jogador/list', JogadorController.list);

router.post('/auth', AuthController.authenticate);

router.post('/endereco/store', EnderecoController.store);
router.post('/endereco/list', EnderecoController.list);

router.post('/patente/store', PatenteController.store);
router.post('/patente/list', PatenteController.list);

router.post('/compra/store', CompraController.store);
router.post('/compra/list', CompraController.list);

//parte 9
router.post('/artefato/store', ArtefatoController.store);
router.post('/artefato/list', ArtefatoController.list);
router.post('/artefato/update', ArtefatoController.update);

export default router; // parte 1 - exporta o router