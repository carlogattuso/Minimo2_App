import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterStudiesPage } from './filter-studies.page';

describe('FilterStudiesPage', () => {
  let component: FilterStudiesPage;
  let fixture: ComponentFixture<FilterStudiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterStudiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterStudiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
