import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  comentario: any = null;

  constructor(
    private route: ActivatedRoute,
    private loading : LoadingController
  ) { }

  ngOnInit(): void {
    this.cargarComentario();
  }

  async cargarComentario() {
    const id = this.route.snapshot.paramMap.get('id');
    const loading = await this.loading.create({
      message: 'Cargando',
      spinner: 'bubbles',
    });
    await loading.present();
    const response = await axios({
      method: 'get',
      url: "https://sws.villahermosa.tecnm.mx/comentario/"+id,
      withCredentials: true,
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      this.comentario = response.data;
    }).catch(function (error) {
      console.log(error);
    });
    loading.dismiss();
  }

}
