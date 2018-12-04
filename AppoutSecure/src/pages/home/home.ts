import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Key = "";
  Token = 0;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController) {}
  hashCode = function(s) {
    var h = 0, l = s.length, i = 0;
    if ( l > 0 )
      while (i < l)
        h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return h;
  };
  public generateToken (){
    let finalPhrase = this.hashCode(this.Key) + Math.round((new Date().getTime() / 60000));
    this.Token = finalPhrase;
    this.presentToast();
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'This token is valid for 60 Second',
      duration: 6000
    });
    toast.present();
  }

}
