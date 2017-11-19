import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { AdMobPro,AdMobOptions} from '@ionic-native/admob-pro';

/**
 * Generated class for the AdvertisementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advertisement',
  templateUrl: 'advertisement.html',
})
export class AdvertisementPage {

  constructor(public adMobFree:AdMobPro) {
  }

  showBannerAd()
  {
    try {
      const bannerConfig: AdMobOptions = {
        //id: 'your-banner-id-here',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.createBanner(bannerConfig);

      const result = this.adMobFree.showBannerAtXY(100,100);
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }

  showInterstitialAd()
  {
    try {
      const interstitialConfig:  AdMobOptions= {
        //id: '',
        isTesting: true,
        autoShow: true
      }
      this.adMobFree.prepareInterstitial(interstitialConfig);
      const result=this.adMobFree.showInterstitial();
      console.log(result);
  }catch(e){
    console.error(e);
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertisementPage');
    this.showBannerAd();
    this.showInterstitialAd();
    }

}
