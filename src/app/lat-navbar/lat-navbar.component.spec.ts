import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatNavbarComponent } from './lat-navbar.component';

describe('LatNavbarComponent', () => {
  let component: LatNavbarComponent;
  let fixture: ComponentFixture<LatNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
