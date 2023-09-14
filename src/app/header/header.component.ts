import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  newMessage: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.messageService.updateMessage(this.newMessage);
    this.newMessage = '';
  }
}
