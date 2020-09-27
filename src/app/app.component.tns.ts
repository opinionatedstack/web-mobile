import { Component, OnInit } from '@angular/core';
import { StackLayout, Enums } from '@nativescript/core';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { filter } from 'rxjs/operators';
import { Application } from '@nativescript/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  private activatedUrl: string;
  private drawerTransition: DrawerTransitionBase;

  constructor(private router: Router, private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject services.
  }

  ngOnInit(): void {
    this.activatedUrl = '/home';
    this.drawerTransition = new SlideInOnTopTransition();

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.activatedUrl = event.urlAfterRedirects);
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this.drawerTransition;
  }

  isComponentSelected(url: string): boolean {
    return this.activatedUrl === url;
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade'
      }
    });

    const sideDrawer = Application.getRootView() as RadSideDrawer;
    sideDrawer.closeDrawer();
  }
}
