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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = InshortsPage;
  //rootPage:any = CardStackPage;
  rootPage:any = HomePage;
  @ViewChild(InshortsPage) inshorts:InshortsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public push: Push, public alertCtrl: AlertController,public storage: Storage,public zone:NgZone,public inshortsService:InshortsService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
	  console.log("Splash screen");
      statusBar.styleDefault();
      splashScreen.hide();
	  this.pushsetup();
    });
  }
  
  pushsetup() {
    const options: PushOptions = {
     android: {
         
     },
     ios: {
         alert: 'true',
         badge: true,
         sound: 'false'
     },
     windows: {}
  };
 
  const pushObject: PushObject = this.push.init(options);
  
  pushObject.on('notification').subscribe((notification: any) => {
   
    if (notification.additionalData.foreground) {
      /*
      let youralert = this.alertCtrl.create({
        title: 'New Push notification',
        message: notification.message
        
      });
      youralert.present();
      */
      console.log("App opened in foreground");
    }
  
    
    if(notification.additionalData.coldstart)
    {
      //let a = new InshortsPage(this.zone);
      let a =  new HomePage(this.zone,this.inshortsService);
      console.log("Opened by coldstart");
      console.log("App opened in background");
      console.log("title"+notification.message)
      //a.notificationData("Summary",notification.mesage);
      a.notificationData(notification['message'],"RAkesh");
    }else{
      //let a = new InshortsPage(this.zone);
      let a =  new HomePage(this.zone,this.inshortsService);
      console.log("App is in background");
      console.log(JSON.stringify(notification));
      console.log("Message"+notification['message']);
      a.notificationData(notification['message'],"RAkesh");
    }
  
    
  });
 
  pushObject.on('registration').subscribe((registration: any) => {
     //do whatever you want with the registration ID
     console.log("rakesh:"+registration.registrationId);
     console.log(registration.registrationType);
  });
 

  pushObject.subscribe('/topics/facts').then(function(success){
    console.log("Rakesh topics"+success);
  },function(error){
    console.log("Rakesh error"+error);
  });

  pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }
 
}

