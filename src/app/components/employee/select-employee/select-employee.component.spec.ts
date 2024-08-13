import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEmployeeComponent } from './select-employee.component';

describe('SelectEmployeeComponent', () => {
  let component: SelectEmployeeComponent;
  let fixture: ComponentFixture<SelectEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
