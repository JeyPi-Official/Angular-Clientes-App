import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { TypeClient } from '../../models/type_client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.css'
})
export class NewClientComponent implements OnInit{
  client!:Client;
  types:TypeClient[] = [];

  constructor(private clientService:ClientService){}

  ngOnInit(): void {
    this.client = this.clientService.newClient();
    this.types = this.clientService.getTypeClients();
  }

  insertClient(){
    this.clientService.addClient(this.client);
    this.client = this.clientService.newClient();
  }
}
