import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu.item';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menu: MenuItem[] = [
    {
      name: '📄 Register',
      goTo: RegisterComponent,
    },
    {
      name: '🔗 Github',
      goTo: 'https://github.com/nytyr',
    }
  ];

  date = new Date();
  startMenuOpened = false;

  ngOnInit(): void {
    this.openComponent(WelcomeComponent);
  }

  openMenuItem(item: MenuItem): void {
    if (typeof item.goTo === 'string') {
      window.open(item.goTo, '_blank');
      return;
    }
    this.openComponent(item.goTo);
  }

  openComponent(component: any): void {
    console.log('Lets open a component');
  }

}
