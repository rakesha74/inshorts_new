import { Component,ViewChild, ViewChildren,NgZone,ChangeDetectionStrategy,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwiperModule,SwiperComponent } from 'angular2-useful-swiper'; 
import * as Immutable from 'immutable';
/**
 * Generated class for the InshortsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inshorts',
  templateUrl: 'inshorts.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InshortsPage {
  
  
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
  @Input()
  appData: any=[
    {
      "url":"https://amgs.000webhostapp.com/inshorts/img_1.jpg",
      "title":"Do you know who is the author of Harry potter novel?",
      "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim "
    },
    {
      "url":"https://amgs.000webhostapp.com/inshorts/img_2.jpg",
      "title":"Do you know who is the highest ODI scorere in cricket?",
      "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "url":"https://amgs.000webhostapp.com/inshorts/img_3.jpg",
      "title":"Do you know who is the Frankeistein?",
      "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
       "url":"https://amgs.000webhostapp.com/inshorts/img_4.jpg",
       "title":"Do you know what is abbreviation of IRCTC?",
       "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];
  
  constructor(private zone:NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InshortsPage');
  }

  swipeEvent(e) {
    console.log("Swiped");
  }

  reloadPage() { // click handler or similar
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
}


  notificationData(url,image){
    
    console.log(url);
    console.log(image);
    console.log(this.appData);
    var entry:any={
      "url":"https://amgs.000webhostapp.com/inshorts/img_3.jpg",
      "title":"Do you know who is the Frankeistein?",
      "content":"Rakesh:Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteurm sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    //this.appData.splice(0,0,entry);
    this.appData=this.appData.merge(entry);
  }

}
