import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSerachBarComponent } from './footer-serach-bar.component';

describe('FooterSerachBarComponent', () => {
  let component: FooterSerachBarComponent;
  let fixture: ComponentFixture<FooterSerachBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSerachBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSerachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
