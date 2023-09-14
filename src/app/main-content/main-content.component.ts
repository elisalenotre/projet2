import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  message: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.message = this.messageService.getMessage();
  }
}
