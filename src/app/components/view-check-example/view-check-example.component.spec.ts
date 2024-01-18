import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCheckExampleComponent } from './view-check-example.component';

describe('ViewCheckExampleComponent', () => {
  let component: ViewCheckExampleComponent;
  let fixture: ComponentFixture<ViewCheckExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCheckExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCheckExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
