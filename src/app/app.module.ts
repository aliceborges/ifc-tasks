import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalPageModule } from '../pages/modal/modal.module';
import { EditModalPageModule } from '../pages/edit-modal/edit-modal.module';
import { TasksProvider } from '../providers/tasks/tasks';
import { DatePipe } from '@angular/common';
import { QuickstartProvider } from '../providers/quickstart/quickstart';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ModalPageModule,
    EditModalPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    EmojiPickerModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //{provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksProvider,
    DatePipe,
    QuickstartProvider,
  ]
})
export class AppModule {}
