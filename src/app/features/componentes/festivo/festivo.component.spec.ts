import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FestivoComponent } from './festivo.component';

describe('FestivosComponent', () => {
  let component: FestivoComponent;
  let fixture: ComponentFixture<FestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivoComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
