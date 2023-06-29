import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgIf} from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
//import { CameraSource } from '@capacitor/camera/dist/esm/definitions';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, CommonModule],
})
export class HomePage {

  showCard = false;
  imageSource: any;
  constructor() {}


  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Prompt
    });
    this.showCard = true;
    this.imageSource=image.dataUrl;  
  };

}
