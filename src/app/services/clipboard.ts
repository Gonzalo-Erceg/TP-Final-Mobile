import { Injectable } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  constructor(private toastCtrl: ToastController) {}

  async copy(text: string): Promise<void> {
    try {
      await Clipboard.write({ string: text });

      const toast = await this.toastCtrl.create({
        message: 'Copiado al portapapeles',
        duration: 1500,
        position: 'bottom'
      });

      await toast.present();

    } catch (err) {
      console.error(err);

      const toast = await this.toastCtrl.create({
        message: 'Error al copiar',
        duration: 1500,
        position: 'bottom'
      });

      await toast.present();
    }
  }
}
