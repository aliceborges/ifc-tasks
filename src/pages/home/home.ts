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

    this.tasks = [
      //{task:'task1', priority:'baixa', body:'content', deadline:'01/01/2019', status:'pendente'},
      //{task:'task2', priority:'alta', body:'content', deadline:'01/01/2019', status:'pendente'},
      //{task:'task3', priority:'normal', body:'content', deadline:'01/01/2019', status:'pendente'},
      //{task:'task4', priority:'alta', body:'content', deadline:'01/01/2019', status:'finalizada'},
      //{task:'task5', priority:'baixa', body:'content', deadline:'01/01/2019', status:'pendente'}
    ]
  }

  ionViewDidEnter(){
    this.tasksProvider.getAll()
      .then((results) => {
        this.tasks = results;
      });
  }

  showModal() {
    let createTask = this.modalCtrl.create(ModalPage);
    createTask.present();
  }

}
