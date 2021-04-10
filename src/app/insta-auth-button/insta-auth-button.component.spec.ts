import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaAuthButtonComponent } from './insta-auth-button.component';

describe('InstaAuthButtonComponent', () => {
  let component: InstaAuthButtonComponent;
  let fixture: ComponentFixture<InstaAuthButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaAuthButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaAuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
