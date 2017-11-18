import { Component,ViewChild,NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SwiperModule,SwiperComponent } from 'angular2-useful-swiper'; 
import { InshortsService,fact } from '../../services/inshorts.service';
import { Observable } from 'rxjs/Observable';
import { Screenshot } from '@ionic-native/screenshot';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  facts:Observable<fact[]>;
  static image_url:string;
  static socialSharing_temp:SocialSharing;

  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;
  //zoneDemo:NgZone;
  config: SwiperOptions  = {

    slidesPerView: 1,
    direction: 'horizontal',
    roundLengths: true,
    effect: 'slide' ,//use cube,flip,coverflow or fade
    speed:300,
    pagination: '.swiper-pagination',
    paginationClickable: false
	

  };
  
  constructor(public zone:NgZone,public inshortsService:InshortsService,public screenshot: Screenshot,public socialSharing:SocialSharing) {
    this.facts=this.inshortsService.facts;
    HomePage.socialSharing_temp=socialSharing;
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.inshortsService.loadAll();
  }

  notificationData(url,image){
    
    console.log(url);
    console.log(image);
    //console.log(this.appData);
    var entry:fact={
      "url":"https://amgs.000webhostapp.com/inshorts/img_3.jpg",
      "title":"Do you know who is the Frankeistein?",
      "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    //this.appData.splice(0,0,entry);
    //this.appData=this.appData.merge(entry);
    this.inshortsService.create(entry);
  }

  refresh()
  {
    //this.inshortsService.loadAll();
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
  
}
