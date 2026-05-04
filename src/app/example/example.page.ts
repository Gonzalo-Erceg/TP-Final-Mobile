import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonAlert,
} from '@ionic/angular/standalone';
import { ItemComponent } from '../item/item.component';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { ProveedorAPI } from '../services/proveedor-api';

export interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
  phone: string;
  website: string;
}

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonInput,
    IonAlert,
    ItemComponent,
  ],
})
export class ExamplePage implements OnInit {
  public Datos: Usuario[] = [];
  public DatosFilter: Usuario[] = [];
  public search: string = '';
  public isOpen: boolean = true;
  public err: any = null;
  public contador: number = 0;
  constructor(private API: ProveedorAPI) {}

  ionViewDidEnter() {
    this.API.LlamarAPI().subscribe({
      next: (dato2: any) => {
        this.Datos = dato2;
        this.DatosFilter = dato2;
        this.contador = this.DatosFilter.length;
      },
      error: (error) => {
        this.err = error;
      },
    });
  }

  filtrarUsuarios() {
    this.DatosFilter = this.Datos.filter((item) => {
      return (
        item.name.includes(this.search) || item.email.includes(this.search)
      );
    });
    this.contador = this.DatosFilter.length;
  }

  ocultarMenor5() {
    this.DatosFilter = this.DatosFilter.filter((item) => {
      return item.id > 5;
    });
  }
  ngOnInit() {}
}
