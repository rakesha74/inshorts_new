import { Component, ViewChild ,NgZone} from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import {InshortsPage} from '../pages/inshorts/inshorts';
import {CardStackPage} from '../pages/card-stack/card-stack';
import {HomePage} from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { InshortsService } from '../services/inshorts.service';
import { Screenshot } from '@ionic-native/screenshot';
import { SocialSharing } from '@ionic-native/social-sharing';
//import { AdvertisementPage} from '../pages/advertisement/advertisement';
import { SwiperModule,SwiperComponent } from 'angular2-useful-swiper'; 
import {LoadingPage} from '../pages/loading/loading';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage:any = LoadingPage;
  @ViewChild(InshortsPage) inshorts:InshortsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
	  console.log("Splash screen");
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

