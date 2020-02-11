import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatRoomComponent } from './chat-room/chat-room.component'
import { from } from 'rxjs';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "register",
    component: RegisterComponent,

  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "chatroom",
    component: ChatRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
