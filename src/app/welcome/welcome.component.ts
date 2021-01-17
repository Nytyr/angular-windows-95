import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private readonly windowsService: WindowsService,
  ) { }

  ngOnInit(): void {
  }

  openRegister(): void {
    this.windowsService.openMenuItem({
      name: '📄 Register',
      goTo: RegisterComponent,
    });
  }

}
