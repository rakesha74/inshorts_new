import { Component,ViewChild,NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SwiperModule,SwiperComponent} from 'angular2-useful-swiper'; 
import { InshortsService,fact } from '../../services/inshorts.service';
import { Observable } from 'rxjs/Observable';
import { Screenshot } from '@ionic-native/screenshot';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  facts:Observable<fact[]>;
  static socialSharing_temp:SocialSharing;
  swiper:SwiperModule;

  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;
  
  config: SwiperOptions  = {

    slidesPerView: 1,
    direction: 'horizontal',
    roundLengths: true,
    effect: 'slide' ,//use cube,flip,coverflow or fade
    speed:300,
    pagination: '.swiper-pagination',
    paginationClickable: false
  };
  
  constructor(public inshortsService:InshortsService,public screenshot: Screenshot,public socialSharing:SocialSharing,public push: Push) {
    this.facts=this.inshortsService.facts;
    HomePage.socialSharing_temp=socialSharing;
    this.pushsetup();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.inshortsService.loadAll();
  }

  public notificationData(url,image){
    
    console.log(url);
    console.log(image);
    
    var entry:fact={
      "url":"https://amgs.000webhostapp.com/inshorts/img_3.jpg",
      "title":"Do you know who is the Frankeistein?",
      "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    
    this.inshortsService.create(entry);
    console.log("Index::"+this.usefulSwiper.swiper.slideTo(0,200,true));
    
  }

  refresh()
  {
    window.location.reload();
  }

  share()
  {
    
    this.screenshot.save('png',80,'myscreenshot').then(function(success){
        console.log("Screenshot Succeess: file:/"+success["filePath"]);
        console.log("File URI::"+"file://"+success["filePath"]);
        HomePage.socialSharing_temp.shareViaWhatsApp("Inshorts","file://"+success["filePath"],null).then(function(success)
          {
            console.log("Sharing Successful:"+success);
          },function(error){
            console.log("Error in sharing:"+error);
          });
    },
     function(error)
    {
       console.log("Screenshot:"+error)
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
      
      console.log("Opened by coldstart");
      console.log("App opened in background");
      console.log("title"+notification.message)
      //a.notificationData("Summary",notification.mesage);
      this.notificationData(notification['message'],"RAkesh");
    }else{
     
      
      console.log("App is in background");
      console.log(JSON.stringify(notification));
      console.log("Message"+notification['message']);
      this.notificationData(notification['message'],"RAkesh");
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
