import { Component } from '@angular/core';
import { Page, Modal, NavController, NavParams, ViewController, Alert, Toast, ActionSheet } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  static get parameters(){
    return [ [NavController] ];
  }

  constructor(nav) {
    this.nav = nav;

    this.tasks = [
      {task:'task1', priority:'baixa', body:'content', deadline:'01/01/2019', status:'pendente'},
      {task:'task2', priority:'alta', body:'content', deadline:'01/01/2019', status:'pendente'},
      {task:'task3', priority:'normal', body:'content', deadline:'01/01/2019', status:'pendente'},
      {task:'task4', priority:'alta', body:'content', deadline:'01/01/2019', status:'finalizada'},
      {task:'task5', priority:'baixa', body:'content', deadline:'01/01/2019', status:'pendente'}
    ]
  }

  showModal(){
    let modal = Modal.create(MyModal);
    this.nav.present(modal);
  }
}

@Page({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})

class MyModal{
  static get parameters(){
    return [ [NavController], [NavParams], [ViewController] ];
  }

  constructor(nav, params, viewCtrl){
    this.nav = nav;
    this.viewCtrl = viewCtrl;
  }

  close(){
    this.viewCtrl.dismiss;
  }
}
