import {Injectable} from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  constructor(public media: MediaObserver) { }

  get isMobile(): boolean {
    return this.media.isActive('lt-md');
  }

  get isTablet(): boolean {
    return this.media.isActive('md');
  }

  get isDesktop(): boolean {
    return this.media.isActive('gt-md');
  }

  get isXs(): boolean {
    return this.media.isActive('xs');
  }

  get isSm(): boolean {
    return this.media.isActive('sm');
  }

  get isMd(): boolean {
    return this.media.isActive('md');
  }

  get isLg(): boolean {
    return this.media.isActive('lg');
  }

  get isXl(): boolean {
    return this.media.isActive('xl');
  }
}
