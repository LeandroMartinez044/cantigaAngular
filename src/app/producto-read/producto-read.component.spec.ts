import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoReadComponent } from './producto-read.component';

describe('ProductoReadComponent', () => {
  let component: ProductoReadComponent;
  let fixture: ComponentFixture<ProductoReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
