import DocesModel from "../Models/DoceModel.js";


class DocesController {
    constructor() {
    }
  
    create(req, res) {
      const nome = req.body.nome;
      DocesModel.create(nome).then(
  
        resposta => {
          console.debug("Inserindo  Doces");
          res.status(resposta[0]).json(resposta[1])
        }
  
  
      ).catch(
        resposta => {
          console.debug("Erro: Inserindo Doces");
          res.status(resposta[0]).json(resposta[1])
        }
      )
  
    }
    read(req, res) {
     DocesModel.read().then(
        resposta => {
          console.debug("Mostrando  Doces");
          res.status(resposta[0]).json(resposta[1])
        }
  
  
      ).catch(
        resposta => {
          console.debug("Erro ao mostrar Doces");
          console.debug(resposta)
          res.status(resposta[0]).json(resposta[1])
        }
      )
    }
    update(req, res) {
      const id_doces = req.params.id_doces;
      const nome = req.body.nome;
  
      DocesModel.update(id_doces, nome).then(
        resposta => {
          console.debug("Atualizando Doces")
          res.status(resposta[0]).json(resposta[1])
        }
  
      ).catch(
        resposta => {
          console.debug("Erro ao atualizar doces");
          console.debug(resposta)
          res.status(resposta[0]).json(resposta[1])
        }
      );
    }
  
    delete(req, res) {
      const id_doces = req.params.id_doces;
      const nome = req.body.nome;
  
      DocesModel.delete(id_doces, nome).then(
        resposta => {
          console.debug("Deletando doces")
          res.status(resposta[0]).json(resposta[1])
        }
  
      ).catch(
        resposta => {
          console.debug("ERRO ao atualizar doces ");
          console.debug(resposta)
          res.status(resposta[0]).json(resposta[1])
        }
      );
    }
  }
  export default new DocesController();