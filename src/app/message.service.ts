import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private message: string = '';

  getMessage(): string {
    return this.message;
  }

  updateMessage(newMessage: string): void {
    this.message = newMessage;
  }
}
