import mysql from "mysql2"
import config from "../config.js";

class DocesModel {
  constructor() {
      this.conexao = mysql.createConnection(config.db);

  }

  create(nome) {
    let sql = `INSERT INTO doces (nome) VALUES("${nome}");`;

    return new Promise((resolve, reject) => {
        this.conexao.query(sql, (erro, retorno) => {
            if (erro) {
                reject([400, erro])
            }
            resolve([201, "Doces Adicionados"])
        })
    });
}

read() {
  let sql = `SELECT * FROM doces;`

  return new Promise((resolve, reject) => {
      this.conexao.query(sql, (erro, retorno) => {
          if (erro) {
              reject([400, erro])
          }
          resolve([200, retorno])
      })
  });
}

update(id_doces, nome) {
  let sql = `UPDATE doces SET nome="${nome}" WHERE id_categoria="${id_doces}"`

  return new Promise((resolve, reject) => {
      this.conexao.query(sql, (erro, retorno) => {
          if (erro) {
              reject([400, erro])
          } else if (retorno.affectedRows > 0) {
              resolve([200, retorno])
          } else {
              resolve([404, "Doces nao encontrado"])
          }

      })
  });

}
delete(id_categoria) {
  let sql = `DELETE from doces WHERE id_doces="${nome}"`

  
  return new Promise((resolve, reject) => {
      this.conexao.query(sql, (erro, retorno) => {
          if (erro) {
              reject([400, erro])
          } else if (retorno.affectedRows > 0) {
              resolve([200, retorno])
          } else {
              resolve([404, "Doce apagado"])
          }

      })
  });

}


}
export default new DocesModel();