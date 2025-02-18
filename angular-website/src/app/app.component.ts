import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MealsComponent } from './meals/meals.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { MenuComponent } from './menu/menu.component';
import { Scroll } from './scroll.service';
import { filter } from 'rxjs';
import { ViewportScroller, Location, PlatformLocation, isPlatformBrowser } from '@angular/common';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RoomsComponent, AboutComponent, ActivitiesComponent, MealsComponent, ContactComponent, BookingComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [Scroll]
})
export class AppComponent implements OnInit {
  isNavigating = true;
  isInitialNavigation = true;
  isMenuOpen = false; // Added from the second snippet
  isScrolled = false; // Added from the second snippet

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let lang = params['lang'];
      if (!lang) {
        const browserLang = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
        lang = ['en', 'fr', 'de', 'nl'].includes(browserLang) ? browserLang : 'en';
      }
      this.languageService.changeLanguage({ code: lang, name: '' }); // The name can be fetched or mapped appropriately
    });
  }

  constructor(
    private scroll: Scroll,
    public router: Router,
    private viewportScroller: ViewportScroller,
    private elementRef: ElementRef,
    private location: Location,
    private platformLocation: PlatformLocation,
    private languageService: LanguageService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      const route = (event as NavigationEnd).url.split('#')[0];
      const parts = route.split('/');
      var anchor = parts[parts.length - 1];

      if(this.isInitialNavigation) {
        setTimeout(() => {
          if(anchor != '' && isPlatformBrowser(this.platformId)) {
            const element = document.getElementById(anchor);
            if (element) {
              this.isNavigating = true;
              element.scrollIntoView();
              setTimeout(() => this.isNavigating = false, 3000);
            }
          }
          else
          {
            this.isNavigating = false;
          }
        }, 100);
        this.isInitialNavigation = false;
        return;
      }

      this.isNavigating = true;
      if(anchor == '')
        setTimeout(() => this.viewportScroller.scrollToPosition([0, 0]), 100);
      else
        setTimeout(() => this.viewportScroller.scrollToAnchor(anchor), 100);
      setTimeout(() => this.isNavigating = false, 3000);
    });
  }

  // Toggle mobile menu - Added from the second snippet
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Add background color on scroll - Added from the second snippet
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if(this.isNavigating) return;

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const elementsWithId = this.elementRef.nativeElement.querySelectorAll('[id].anchor');
    let closestElementId = null;
    let closestDistance = Number.MAX_SAFE_INTEGER;

    elementsWithId.forEach((element: HTMLElement) => {
      const elementPosition = element.offsetTop;
      const distance = Math.abs(elementPosition - scrollPosition);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestElementId = element.id;
      }
    });

    if (closestElementId) {
      closestElementId = closestElementId == 'home' ? '' : closestElementId;
      const currentUrl = this.router.url;
      const lastSlashIndex = currentUrl.lastIndexOf('/');
      const baseUrl = currentUrl.substring(0, lastSlashIndex + 1);
      const updatedUrl = baseUrl + closestElementId;

      this.location.replaceState(updatedUrl);
    }
  }
}