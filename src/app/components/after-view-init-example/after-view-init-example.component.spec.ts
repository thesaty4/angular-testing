import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewInitExampleComponent } from './after-view-init-example.component';

describe('AfterViewInitExampleComponent', () => {
  let component: AfterViewInitExampleComponent;
  let fixture: ComponentFixture<AfterViewInitExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterViewInitExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterViewInitExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
