import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null; //Retirado a HomePage para não carregar a página sem antes carregar o banco de dados


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      dbProvider.createDatabase()
        .then(() => {this.openHomePage(splashScreen)})
        .catch((e) => console.error('Um erro aconteceu:', e));
    });
  }

  private openHomePage(splashScreen: SplashScreen){
    splashScreen.hide();
    this.rootPage = HomePage;
  }
}
