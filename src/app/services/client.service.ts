import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { TypeClient } from '../models/type_client';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  private types: TypeClient[] = [];
  private client!: Client;

  constructor(private firestore: AngularFirestore) {
    this.types = [{ id: 0, description: "Indefinido" }, { id: 1, description: "Activo" }, { id: 2, description: "Inactivo" }, { id: 3, description: "Deudor" }];
  }

  newClient() {
    this.client = new Client();
    return this.client;
  }

  getTypeClients() {
    return this.types;
  }

  // método que permite obtener todos los documentos de la colección
  getClients() {
    return this.firestore.collection('clientes').snapshotChanges();
  }

  //método para insertar un método nuevo en la colección
  createClient(nuevoCliente: Client) {
    return this.firestore.collection('clientes').add(Object.assign({}, nuevoCliente));
  }

  //métdo para actualizar un documento existente
  updateClient(cliente: Client) {
    this.firestore.doc('clientes/' + cliente.id).update(cliente);
  }

  //método para eliminar un documento
  deleteClient(clienteId: string) {
    this.firestore.doc('clientes/' + clienteId).delete();
  }
}
