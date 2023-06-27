import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaazyImageComponent } from './lazy-image.component';

describe('LaazyImageComponent', () => {
  let component: LaazyImageComponent;
  let fixture: ComponentFixture<LaazyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaazyImageComponent]
    });
    fixture = TestBed.createComponent(LaazyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
