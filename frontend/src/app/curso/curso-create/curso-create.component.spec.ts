import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCreateComponent } from './curso-create.component';

describe('CursoCreateComponent', () => {
  let component: CursoCreateComponent;
  let fixture: ComponentFixture<CursoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
