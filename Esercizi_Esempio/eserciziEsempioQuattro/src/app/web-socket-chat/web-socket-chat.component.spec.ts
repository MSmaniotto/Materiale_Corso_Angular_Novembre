import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Socket } from 'ngx-socket-io';
import { WebSocketChatComponent } from './web-socket-chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

describe('WebSocketChatComponent', () => {
  let component: WebSocketChatComponent;
  let fixture: ComponentFixture<WebSocketChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSocketChatComponent ],
      providers: [SocketIoModule.forRoot(config)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
