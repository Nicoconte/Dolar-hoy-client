import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupNavbarComponent } from './sup-navbar.component';

describe('SupNavbarComponent', () => {
  let component: SupNavbarComponent;
  let fixture: ComponentFixture<SupNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
