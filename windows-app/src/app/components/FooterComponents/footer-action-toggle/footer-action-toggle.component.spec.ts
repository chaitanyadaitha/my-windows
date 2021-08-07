import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterActionToggleComponent } from './footer-action-toggle.component';

describe('FooterActionToggleComponent', () => {
  let component: FooterActionToggleComponent;
  let fixture: ComponentFixture<FooterActionToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterActionToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterActionToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
