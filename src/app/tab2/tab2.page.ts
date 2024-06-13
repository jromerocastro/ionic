import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CrearComentarioPage } from '../crear-comentario/crear-comentario.page';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  comentarios:any = [];

  constructor(
    private loadingCtrl : LoadingController,
    private modalCtrl   : ModalController,
    private alertCtrl   : AlertController,
    private router      : Router
  ) {}

  ngOnInit() {
    this.cargarComentarios();
} 

async cargarComentarios(event?: InfiniteScrollCustomEvent) {
  const loading = await this.loadingCtrl.create({
      message : 'Cargando',
      spinner : 'bubbles',
  });
  await loading.present();
  const response = await axios({
      method: 'get',
      url : "https://sws.villahermosa.tecnm.mx/comentario",
      withCredentials: true,
      headers: {
          'Accept': 'application/json'
      }
  }).then( (response) => {
      this.comentarios = response.data;
      event?.target.complete();
  }).catch(function (error) {
      console.log(error);     
  });
  loading.dismiss();
}

async new() {
  const paginaModal = await this.modalCtrl.create({
      component: CrearComentarioPage,
      breakpoints : [0, 0.3, 0.5, 0.95],
      initialBreakpoint: 0.95
  });
  await paginaModal.present();
  paginaModal.onDidDismiss().then((data) => {
      this.cargarComentarios();
  });
}

async editar(com_id:string) {
  const paginaModal = await this.modalCtrl.create({
  component: CrearComentarioPage,
  componentProps: {
      'com_id': com_id
  },
  breakpoints: [0, 0.3, 0.5, 0.95],
  initialBreakpoint: 0.95
  });
  await paginaModal.present();

  paginaModal.onDidDismiss().then((data) => {
      this.cargarComentarios();
  });
}

async alertEliminar(com_id: string) {
  const alert = await this.alertCtrl.create({
  header: 'Alumno',
  subHeader: 'Eliminar',
  message: '¿Estás seguro de eliminar el comentario?',
  cssClass: 'alert-center',
  buttons: [
      {
      text: 'Cancelar',
      role: 'cancel'
      },
      {
      text: 'Confirmar',
      role: 'confirm',
      handler: () => {
          this.eliminar(com_id);
      }
      }
  ]
  });
  await alert.present();
}

async eliminar(com_id:string) {
  const response = await axios({
  method: 'delete',
  url: 'https://sws.villahermosa.tecnm.mx/comentarios/' + com_id,
  withCredentials: true,
  headers: {
      'Content-Type': 'application/json'
  }
  }).then((response) => {
  if (response?.status == 204) {
      this.alertEliminado('El comentario ha sido eliminado');
  }
  }).catch(function (error) {
  console.log(error);
  });
}

async alertEliminado(msg = "") {
  const alert = await this.alertCtrl.create({
  header: 'Comentario',
  subHeader: 'Eliminado',
  message: msg,
  cssClass: 'alert-center',
  buttons: [
      {
      text: 'Continuar',
      role: 'cancel',
      },
      {
      text: 'Salir',
      role: 'confirm',
      handler: () => {
          this.regresar();
      },
      },
  ],
  });

  await alert.present();
}

private regresar() {
  this.router.navigate(['/tabs/tab2']).then(() => {
  window.location.reload();
  });
}

}
