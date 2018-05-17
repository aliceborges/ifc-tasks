import { Component } from '@angular/core';
import { Page, Modal, NavController, NavParams, ViewController, Alert, Toast, ActionSheet } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  static get parameters(){
    return[[NavController]]
  }

  constructor(nav) {
    this.navCtrl = nav;

    this.tasks = [
      {task:'task1', priority:'low', body:'content', deadline:'01/01/2019', status:'pending'},
      {task:'task2', priority:'high', body:'content', deadline:'01/01/2019', status:'pending'},
      {task:'task3', priority:'normal', body:'content', deadline:'01/01/2019', status:'pending'},
      {task:'task4', priority:'high', body:'content', deadline:'01/01/2019', status:'done'},
      {task:'task5', priority:'low', body:'content', deadline:'01/01/2019', status:'pending'},
    ]
  }

}
