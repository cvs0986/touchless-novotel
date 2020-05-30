import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spa-cart',
  templateUrl: './spa-cart.component.html',
  styleUrls: ['./spa-cart.component.scss'],
})
export class SpaCartComponent implements OnInit {
  @Input() spaItem;
  guestQty = 0;

  constructor(private modalCtrl: ModalController, private router: Router, private toastCtrl: ToastController) {}

  ngOnInit() {
    console.log(this.spaItem);
  }

  dismissCart() {
    this.modalCtrl.dismiss();
  }

  incrementQty() {
    this.guestQty += 1;
  }

  // decrements item

  decrementQty() {
    if (this.guestQty - 1 < 1) {
      this.guestQty = 0;
    } else {
      this.guestQty -= 1;
    }
  }

  placedOrder() {
    this.dismissCart();
    this.toastCtrl.create({
      header: 'Thank you!',
      message: 'Your spa session has been booked!',
      keyboardClose: true,
      position: 'bottom',
      color: 'success',
      buttons: [{
        side: 'end',
        text: 'OKAY',
        handler: () => {

        }
      }]
    }).then(toastEl => {
      toastEl.present();
    });
  }
}
