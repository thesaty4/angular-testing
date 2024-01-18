import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentCheckedExampleComponent } from './after-content-checked-example.component';

describe('AfterContentCheckedExampleComponent', () => {
  let component: AfterContentCheckedExampleComponent;
  let fixture: ComponentFixture<AfterContentCheckedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterContentCheckedExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterContentCheckedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
