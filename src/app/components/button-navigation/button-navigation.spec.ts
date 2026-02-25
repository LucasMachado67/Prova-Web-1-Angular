import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNavigation } from './button-navigation';

describe('ButtonNavigation', () => {
  let component: ButtonNavigation;
  let fixture: ComponentFixture<ButtonNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
