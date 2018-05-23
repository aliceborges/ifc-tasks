import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, Alert, Toast, ActionSheet, ToastController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { TasksProvider, Task, listTasks } from '../../providers/tasks/tasks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public tasks: listTasks[];
  // static get parameters(){
  //   return [ [NavController] ];
  // }

  constructor(public nav: NavController,
              public modalCtrl: ModalController,
              private tasksProvider: TasksProvider,
              public toast: ToastController
            ) {

    this.tasks = []
  }

  ionViewDidEnter(){
    this.tasksProvider.getAll()
      .then((results) => {
        this.tasks = results;
      });
  }

  atualizaLista(){
    this.tasksProvider.getAll()
      .then((results) => {
        this.tasks = results;
      });
  }

  showModal() {
    let createTask = this.modalCtrl.create(ModalPage);
    createTask.onDidDismiss(() => {
      this.atualizaLista();
    });
    createTask.present();
  }

  removeTask(key){
    this.tasksProvider.remove(key);
    this.atualizaLista();
  }

}
