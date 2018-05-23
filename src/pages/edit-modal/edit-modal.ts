import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { TasksProvider, Task } from '../../providers/tasks/tasks';

@IonicPage()
@Component({
  selector: 'page-edit-modal',
  templateUrl: 'edit-modal.html',
})

export class EditModalPage {
  public task;
  public key;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private tasksProvider: TasksProvider,
              private toast: ToastController
            ) {
    this.task = navParams.data.task;
    this.key = navParams.data.key;
    console.log (this.task, this.key)
  }

  saveTask(){
      this.tasksProvider.update(this.key, this.task)
        .then(() => {
            this.toast.create({message: 'A tarefa foi editada.', duration: 3000, position: 'botton'}).present();
            this.close();
        })
        .catch(() => {
            this.toast.create({message: 'A tarefa não pode ser editada.', duration: 3000, position: 'botton'}).present();
            this.close();
        });
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
