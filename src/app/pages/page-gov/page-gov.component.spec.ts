import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGovComponent } from './page-gov.component';

describe('PageGovComponent', () => {
  let component: PageGovComponent;
  let fixture: ComponentFixture<PageGovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
