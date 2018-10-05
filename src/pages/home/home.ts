import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ClienteProvider, ClienteLista } from '../../providers/cliente/cliente';
import { EditarPage } from '../editar/editar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clientes:ClienteLista[];

  constructor(
    public navCtrl: NavController,
    private clienteProvide: ClienteProvider,
    private toast: ToastController
    ) {

  }

  ionViewDidEnter() {
    this.clienteProvide.getAll()
    .then(results => {
      this.clientes = results;
    })
  }

  addCliente(){
    this.navCtrl.push('EditarPage');
  }

  editCliente(item: ClienteLista){
    this.navCtrl.push('EditarPage', {key:item.key, cliente:item.cliente});
  }

  removeCliente(item: ClienteLista){
    this.clienteProvide.remove(item.key)
    .then(() => {

      let index = this.clientes.indexOf(item);
      this.clientes.splice(index, 1);

      this.toast.create({
        message: 'Cliente Removido',
        duration: 3000,
        position: 'button'
      }).present();
    })
  }
  

}
