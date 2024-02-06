import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.css'
})
export class ClientsListComponent implements OnInit{
  clients: Client[] = [];

  constructor(private clientService:ClientService){}

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
  }
}
