import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingPerposeComponent } from './understanding-perpose.component';

describe('UnderstandingPerposeComponent', () => {
  let component: UnderstandingPerposeComponent;
  let fixture: ComponentFixture<UnderstandingPerposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandingPerposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingPerposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
