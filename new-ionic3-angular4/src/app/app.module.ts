import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,ElementRef } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Push } from '@ionic-native/push';
import { MyApp } from './app.component';
import { SwiperModule,SwiperComponent } from 'angular2-useful-swiper'; 
import {InshortsPage} from '../pages/inshorts/inshorts';
import { SwingModule } from 'angular2-swing';
//import {CardStackPage} from '../pages/card-stack/card-stack';
import {HomePage} from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';
import { InshortsService } from '../services/inshorts.service';
import { HttpClientModule } from '@angular/common/http';
import { Screenshot } from '@ionic-native/screenshot';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AdMobPro} from '@ionic-native/admob-pro';
//import { AdvertisementPage} from '../pages/advertisement/advertisement';
import {LoadingPage} from '../pages/loading/loading';

@NgModule({
  declarations: [
    MyApp,
    //InshortsPage
    //CardStackPage
    //HomePage
   // AdvertisementPage
   LoadingPage
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    SwingModule,
    HttpClientModule,
    
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   // InshortsPage
    //CardStackPage
    //HomePage,
    //AdvertisementPage
    LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InshortsService,
    Screenshot,
    SocialSharing,
    SwiperComponent,
    AdMobPro,
    
	Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
