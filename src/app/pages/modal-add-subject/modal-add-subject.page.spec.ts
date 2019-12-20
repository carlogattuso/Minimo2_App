import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAddSubjectPage } from './modal-add-subject.page';

describe('ModalAddSubjectPage', () => {
  let component: ModalAddSubjectPage;
  let fixture: ComponentFixture<ModalAddSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAddSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
