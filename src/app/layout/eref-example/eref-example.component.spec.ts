import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErefExampleComponent } from './eref-example.component';

describe('ErefExampleComponent', () => {
  let component: ErefExampleComponent;
  let fixture: ComponentFixture<ErefExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErefExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErefExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
