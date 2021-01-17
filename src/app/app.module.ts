import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DraggableDirective } from './draggable.directive';
import { WindowsService } from './windows.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WelcomeComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WindowsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
