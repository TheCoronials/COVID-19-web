import { NgModule } from '@angular/core';
// import { PageCarouselComponent } from './page/page-carousel/page-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { PageTechComponent } from './page-tech/page-tech.component';
import { PageAboutComponent } from './page-about/page-about.component';

@NgModule({
  declarations: [PageComponent, PageTechComponent, PageAboutComponent],
  imports: [NgbModule, FormsModule],
  exports: [PageComponent, PageTechComponent, PageAboutComponent],
  providers: []
})
export class PagesModule {}
