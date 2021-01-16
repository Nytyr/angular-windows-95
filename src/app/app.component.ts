import { AfterViewInit, Component, ComponentFactoryResolver, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { MenuItem } from './menu.item';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  menu: MenuItem[] = [
    {
      name: '📕 Welcome',
      goTo: WelcomeComponent,
    },
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
  lastZIndex = 10;
  lastWindowOpened = 0;
  openedWindows = [
    {
      component: WelcomeComponent,
      zIndex: this.lastZIndex,
      title: '📕 Welcome'
    }
  ];

  @ViewChildren('dynamic', {read: ViewContainerRef})
  public windowTargets: QueryList<ViewContainerRef>;

  constructor(private readonly componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    this.loadWindowContentWithDelay(0, this.openedWindows[0].component);
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
    this.lastWindowOpened = this.openedWindows.length - 1;
    this.loadWindowContentWithDelay(this.openedWindows.length - 1, component);
  }

  closeWindow(index: number): void {
    this.openedWindows.splice(index, 1);
  }

  focusWindow(index: number): void {
    this.openedWindows[index].zIndex = this.lastZIndex + 1;
    this.lastZIndex += 1;
    this.lastWindowOpened = index;
  }

  private loadWindowContentWithDelay(index: number, component: any): void {
    setTimeout(() => {
      this.loadWindowContent(index, component);
    }, 20);
  }

  private loadWindowContent(index: number, component: any): void {
    const target = this.windowTargets.toArray()[index];
    const widgetComponent = this.componentFactoryResolver.resolveComponentFactory(component);
    const ref = target.createComponent(widgetComponent);
    ref.changeDetectorRef.detectChanges();
  }
}
