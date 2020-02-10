import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSubCategoryComponent } from './admin-edit-sub-category.component';

describe('AdminEditSubCategoryComponent', () => {
  let component: AdminEditSubCategoryComponent;
  let fixture: ComponentFixture<AdminEditSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
