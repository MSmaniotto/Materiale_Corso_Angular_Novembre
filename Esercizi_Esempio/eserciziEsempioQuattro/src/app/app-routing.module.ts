import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingExampleComponent } from './testing-example/testing-example.component';
import { BootstrapExampleComponent } from './bootstrap-example/bootstrap-example.component';
import { WebSocketChatComponent } from './web-socket-chat/web-socket-chat.component';


const routes: Routes = [
  { path: '', component: TestingExampleComponent },
  { path: 'bootstrap', component: BootstrapExampleComponent},
  { path: 'wsChat', component: WebSocketChatComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
