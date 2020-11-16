import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'; //npm install  ngx-socket-io --save
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) { }

  public sendMessage(message) {
    this.socket.emit('message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('newMessage', (message) => {
          observer.next(message);
      });
    });
  }
}
