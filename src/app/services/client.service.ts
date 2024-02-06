import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { TypeClient } from '../models/type_client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients: Client[] = [];
  private types: TypeClient[] = [];

  constructor() {
    this.clients = [];
    this.types = [{ id: 0, description: "Undefined" }, { id: 1, description: "Active" }, { id: 2, description: "Inactive" }, { id: 3, description: "Debtor" }];
  }

  getClients() {
    return this.clients;
  }

  getTypeClients() {
    return this.types;
  }

  addClient(new_client: Client) {
    this.clients.push(new_client);
  }

  newClient(): Client {
    return { id: this.clients.length + 1, name: "", rfc: "", address: "", type: 0 }
  }
}
