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
  openedWindows = [];
  lastZIndex = 10;

  ngOnInit(): void {
    this.openComponent(WelcomeComponent, 'Welcome');
  }

  openMenuItem(item: MenuItem): void {
    if (typeof item.goTo === 'string') {
      window.open(item.goTo, '_blank');
      return;
    }
    this.openComponent(item.goTo, item.name);
    this.startMenuOpened = false;
  }

  openComponent(component: any, title: string): void {
    this.openedWindows = [...this.openedWindows, {
      component,
      zIndex: this.lastZIndex + 1,
      title
    }];
    this.lastZIndex += 1;
  }

  closeWindow(index: number): void {
    console.log(index);
    this.openedWindows.splice(index, 1);
    console.log(this.openedWindows);
  }

}
