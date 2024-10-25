import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports: [ BrowserAnimationsModule ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title "H A K K I M D A"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('H A K K I M D A');
  });

  it('should display the description text correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const description = compiled.querySelector('.description')?.textContent;
    expect(description).toContain('2001 yılında Kayseri/Develi\'de doğdum');
  });

  it('should have an image with the correct source', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector('.about-image img') as HTMLImageElement;
    expect(imgElement.src).toContain('assets/images/profile.jpg');
  });

  it('should render experience section with correct titles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const experienceTitle = compiled.querySelector('.experience-section h2')?.textContent;
    expect(experienceTitle).toBe('İş Deneyimlerim');
  });

  it('should have a list of skills with logos', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const skills = compiled.querySelectorAll('.skills-list li img');
    expect(skills.length).toBeGreaterThan(0); 
  });

  it('should render contact section with correct details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contactName = compiled.querySelector('.contact-section p strong')?.textContent;
    expect(contactName).toBe('Ertuğrul Özcan');
  });
});