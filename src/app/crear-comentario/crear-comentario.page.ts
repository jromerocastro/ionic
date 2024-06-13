import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Input } from '@angular/core';
import axios from 'axios';



@Component({
  selector: 'app-crear-comentario',
  templateUrl: './crear-comentario.page.html',
  styleUrls: ['./crear-comentario.page.scss'],
})
export class CrearComentarioPage implements OnInit {

  public comentario!: FormGroup;
  private editarDatos = [];


estados = [
    {'est_id' : 0, 'est_nombre' : 'Activo'},
    {'est_id' : 1, 'est_nombre' : 'Inactivo'},
];
mensajes_validacion:any = {
  'com_titulo'      : [{type : 'required' , message : 'Título requerido.'}],
  'com_descripcion' : [{type : 'required' , message : 'Descripción requerida.'}],
  'com_nombre'      : [{type : 'required' , message : 'Nombre del creador requerido.'}],
  'com_estado'      : [{type : 'required' , message : 'Estado requerido.'}]
}
  constructor(
    private formBuilder : FormBuilder,
    private alertCtrl   : AlertController,
    private modalCtrl   : ModalController,
    
) { }
@Input() com_id: string | undefined;

ngOnInit() {
  if (this.com_id !== undefined) {
    this.getDetalles();
  }
this.formulario();
}

private formulario() {
  this.comentario = this.formBuilder.group({
    com_titulo     : ['', [Validators.required]],
    com_descripcion: ['', [Validators.required]],
    com_nombre     : ['', [Validators.required]],
    com_estado     : ['', [Validators.required]],
  });
  if (this.com_id !== undefined) {
    this.comentario.get('com_titulo')?.disable();
  }
}


async guardarDatos() {
  try {
    const comentario        = this.comentario?.value;
    comentario.com_creacion = this.getFormattedDate();
    if (this.com_id === undefined) {
      const response = await axios({
          method: 'post',
          url : "https://sws.villahermosa.tecnm.mx/comentarios",
          data: comentario,
          headers: {
            'Content-Type': 'application/json'
          }
      }).then( (response) => {
          if(response?.status == 201) {
            this.alertGuardado('El comentario ' + response.data.com_titulo + ' ha sido registrado');
          }
      }).catch( (error) => {
          if(error?.response?.status == 422) {
            this.alertGuardado(error?.response?.data[0]?.message, "Error");
          }     
      });
    } else {
      const response = await axios({
        method: 'put',
        url: 'https://sws.villahermosa.tecnm.mx/comentarios/' + this.com_id,
        data: comentario,
        headers: {
            'Content-Type': 'application/json'
        }
        }).then((response) => {
          if (response?.status == 200) {
              this.alertGuardado('El comentario ' + response.data.com_titulo + ' ha sido actualizado');
          }
        }).catch((error) => {
          if (error?.response?.status == 422) {
              this.alertGuardado(error?.response?.data[0]?.message, "Error");
          }
      });
    }
  } catch(e){
  console.log(e);
  }
}

public getError(controlName: string) {
  let errors: any[] = [];
  const control = this.comentario.get(controlName);
  if (control?.touched && control?.errors != null) {
  errors = JSON.parse(JSON.stringify(control?.errors));
  }
  return errors;
}

private async alertGuardado(msg = "",  subMsg= "Guardado") {
  const alert = await this.alertCtrl.create({
     header: 'Comentario',
     subHeader: subMsg,
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
              this.modalCtrl.dismiss();
            },
         },
     ],
  });
  await alert.present();
}

private getFormattedDate(): string {
  const date    = new Date();
  const year    = date.getFullYear();
  const month   = String(date.getMonth() + 1).padStart(2, '0');
  const day     = String(date.getDate()).padStart(2, '0');
  const hours   = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

async getDetalles() {
  const response = await axios({
  method: 'get',
  url: "https://sws.villahermosa.tecnm.mx/comentario/" + this.com_id,
  withCredentials: true,
  headers: {
      'Accept': 'application/json'
  }
  }).then((response) => {
      this.editarDatos = response.data;
      Object.keys(this.editarDatos).forEach((key: any) => {
          const control = this.comentario.get(String(key));
          if (control !== null) {
              control.markAsTouched();
              control.patchValue(this.editarDatos[key]);
          }
      })
  }).catch(function (error) {
      console.log(error);
  });
}


}
