import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTechComponent } from './page-tech.component';

describe('PageTechComponent', () => {
  let component: PageTechComponent;
  let fixture: ComponentFixture<PageTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
