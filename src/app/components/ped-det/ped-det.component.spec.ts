import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedDetComponent } from './ped-det.component';

describe('PedDetComponent', () => {
  let component: PedDetComponent;
  let fixture: ComponentFixture<PedDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedDetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
