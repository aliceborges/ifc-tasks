import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {}

  public getDB(){
    return this.sqlite.create({
      name: 'tasks.db',
      location:'default'
    });
  }

  public createDatabase(){
    return this.getDB()
      .then((db: SQLiteObject) => {
        this.createTables(db);
        this.insertDefaultItems(db);
      })
      .catch(e => console.error(e));
  }

  private createTables(db: SQLiteObject){
    db.sqlBatch([
      ['create table if not exists priorities(id integer not null primary key autoincrement, name text, status integer)'],
      ['create table if not exists status(id integer primary key autoincrement not null, name text, status integer)'],
      ['create table if not exists typeTask(id integer primary key autoincrement not null, name text, status integer)'],
      ['create table if not exists tasks (task integer primary key autoincrement not null, priority integer, body text, deadline date, status integer, foreign key (priority) references priorities(id),foreign key (status) references status(id))']
    ])
    .then(() => console.log('Tabelas criadas.'))
    .catch(e => console.error('Erro ao criar tabelas!', e));
  }

  private insertDefaultItems(db: SQLiteObject){
    db.executeSql('select count(*) as qtd from priorities', {})
      .then((data:any) => {
        if(data.rows.item(0).qtd == 0){
          db.sqlBatch(
            ["insert into priorities(name) values ('Baixa'), ('Media'), ('Alta')"]
          )
            .then(() => console.log('Prioridades inseridas.'))
            .catch(e => console.error('Erro ao adicionar prioridades!', e))
        }
      });

      db.executeSql('select count(*) as qtd from status', {})
        .then((data:any) => {
          if(data.rows.item(0).qtd == 0){
            db.sqlBatch(
              ["insert into status(name) values ('Em andamento'), ('Concluido')"]
            )
              .then(() => console.log('Status inseridos.'))
              .catch(e => console.error('Erro ao adicionar status!', e))
          }
        });

      db.executeSql('select count(*) as qtd from typeTask', {})
        .then((data:any) => {
          if(data.rows.item(0).qtd == 0){
            db.sqlBatch(
              ["insert into typeTask (name) values ('Tarefa'), ('Prova'), ('Desafio'), ('Estudos')"]
            )
              .then(() => console.log('Tipos de tasks inseridos.'))
              .catch(e => console.error('Erro ao adicionar tipos de task!', e))
          }
        });
  }
}
