
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';


@Injectable()
export class ClienteProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {


  }

  public insert(cliente: Cliente){
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, cliente);
  }

  public update(key: string, cliente: Cliente) {
    return this.save(key, cliente);
  }

  public save(key: string, cliente: Cliente){
    return this.storage.set(key, cliente);
  }

  public remove(key: string){
    return this.storage.remove(key);
  }

  public getAll(){
    let clientes: ClienteLista[] = [];
    return this.storage.forEach((
      value: Cliente, 
      key: string, 
      interationNumber: Number
      ) => {
        let cliente = new ClienteLista();
        cliente.key = key;
        cliente.cliente = value;
        clientes.push(cliente);
      })
      .then(() => {
        return Promise.resolve(clientes);
    
      
      }).cath((error) =>{
      return Promise.reject(error);

      });

    }
}

export class Cliente{
  nome: string;
  tel: number;
  data: Date;
  ativo: boolean;
}

export class ClienteLista{
  key: string;
  cliente: Cliente;
}