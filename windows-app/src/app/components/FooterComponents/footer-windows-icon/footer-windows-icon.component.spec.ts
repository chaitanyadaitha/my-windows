import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWindowsIconComponent } from './footer-windows-icon.component';

describe('FooterWindowsIconComponent', () => {
  let component: FooterWindowsIconComponent;
  let fixture: ComponentFixture<FooterWindowsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWindowsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWindowsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
