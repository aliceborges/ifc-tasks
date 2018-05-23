import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { TasksProvider, Task } from '../../providers/tasks/tasks';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  task: Task;
  key: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private tasksProvider: TasksProvider,
              private toast: ToastController
            ) {
    this.task = new Task();
  }

  saveTask(){
    if (this.key){
      return this.tasksProvider.update(this.key, this.task);
    }
    else{
      return this.tasksProvider.insert(this.task);
    }
  }

  save(){
    this.saveTask()
      .then(() => {
        this.toast.create({message: 'A tarefa foi adicionada.', duration: 3000, position: 'botton'}).present();
        this.viewCtrl.dismiss();
      })
      .catch(() => {
        this.toast.create({message: 'Erro ao salvar a tarefa.', duration: 3000, position: 'botton'}).present();
        this.viewCtrl.dismiss();
      })
  }

  close(){
    this.viewCtrl.dismiss();
  }
}
