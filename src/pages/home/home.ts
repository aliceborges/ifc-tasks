import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, Alert, Toast, ActionSheet } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public tasks;
  // static get parameters(){
  //   return [ [NavController] ];
  // }

  constructor(public nav: NavController, public modalCtrl: ModalController) {

    this.tasks = [
      {task:'task1', priority:'baixa', body:'content', deadline:'01/01/2019', status:'pendente'},
      {task:'task2', priority:'alta', body:'content', deadline:'01/01/2019', status:'pendente'},
      {task:'task3', priority:'normal', body:'content', deadline:'01/01/2019', status:'pendente'},
      {task:'task4', priority:'alta', body:'content', deadline:'01/01/2019', status:'finalizada'},
      {task:'task5', priority:'baixa', body:'content', deadline:'01/01/2019', status:'pendente'}
    ]
  }

  showModal() {
    let createTask = this.modalCtrl.create(ModalPage);
    createTask.present();
  }

}
