import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAppsListComponent } from './footer-apps-list.component';

describe('FooterAppsListComponent', () => {
  let component: FooterAppsListComponent;
  let fixture: ComponentFixture<FooterAppsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAppsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAppsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
