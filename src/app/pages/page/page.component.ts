import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  images = [
    '../../../assets/test_screenshot.png',
    '../../../assets/test_screenshot.png'
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}

// import { Component, ViewChild } from '@angular/core';
// import {
//   NgbCarousel,
//   NgbSlideEvent,
//   NgbSlideEventSource
// } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-page-carousel',
//   templateUrl: './page-carousel.component.html',
//   styleUrls: ['./page-carousel.component.scss']
// })
// export class PageCarouselComponent {

// }
