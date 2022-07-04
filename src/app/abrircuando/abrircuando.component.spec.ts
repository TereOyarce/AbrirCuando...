import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrircuandoComponent } from './abrircuando.component';

describe('AbrircuandoComponent', () => {
  let component: AbrircuandoComponent;
  let fixture: ComponentFixture<AbrircuandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrircuandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrircuandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
