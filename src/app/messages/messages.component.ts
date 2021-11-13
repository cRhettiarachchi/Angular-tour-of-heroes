import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // The massage service is public since the date is bind to the template for minimum code
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
