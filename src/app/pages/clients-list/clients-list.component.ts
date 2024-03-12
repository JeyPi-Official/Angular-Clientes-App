import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { TypeClient } from '../../models/type_client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})

export class ClientsListComponent implements OnInit {

  clients: Client[] = [];
  types: TypeClient[] = [{ id: 0, description: "Indefinido" }, { id: 1, description: "Activo" }, { id: 2, description: "Inactivo" }, { id: 4, description: "Deudor" }];
  client = new Client();

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data.map(doc => {
        return {
          ...doc.payload.doc.data() as Client,
          id: doc.payload.doc.id
        };
      });
    });
  }

  //método para insertar un nuevo cliente
  insertarCliente() {
    this.clientService.createClient(this.client);
    this.client = new Client();
  }

  //método para seleccionar un cliente y modificarlo o eliminarlo
  selectCliente(clienteSeleccionado: Client) {
    this.client = clienteSeleccionado;
  }

  //método para modificar un cliente
  updateCliente() {
    this.clientService.updateClient(this.client);
    this.client = new Client();
  }

  //método para eliminar un cliente
  deleteClient(id: string) {
    this.clientService.deleteClient(id);
    this.client = new Client();
  }
}
