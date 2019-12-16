import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrollStudentsPage } from './enroll-students.page';

describe('EnrollStudentsPage', () => {
  let component: EnrollStudentsPage;
  let fixture: ComponentFixture<EnrollStudentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollStudentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
