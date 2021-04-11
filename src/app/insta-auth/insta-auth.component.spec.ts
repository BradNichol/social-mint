import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaAuthComponent } from './insta-auth.component';

describe('InstaAuthComponent', () => {
  let component: InstaAuthComponent;
  let fixture: ComponentFixture<InstaAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
