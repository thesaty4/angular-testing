import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyExampleComponent } from './destroy-example.component';

describe('DestroyExampleComponent', () => {
  let component: DestroyExampleComponent;
  let fixture: ComponentFixture<DestroyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestroyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
