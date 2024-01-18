import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentInitExampleComponent } from './after-content-init-example.component';

describe('AfterContentInitExampleComponent', () => {
  let component: AfterContentInitExampleComponent;
  let fixture: ComponentFixture<AfterContentInitExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterContentInitExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterContentInitExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
