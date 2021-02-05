import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import { UppercasePipe } from './uppercase.pipe';
import { DesignDirective } from './design.directive';


@NgModule({
  declarations: [UserComponent, UsersComponent, UppercasePipe, DesignDirective],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [HttpClientModule, DesignDirective],
  providers: [UserService]
})
export class UserModule { }
