import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { VideoPopupComponent } from '../video-popup/video-popup.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  id: string ='';
  classId: string = '';
  className: string = '';
  classDescription: string = '';
  classVideos: string = '';
  classStudents: string = '';
  classQuizzes: string = '';
  classPdfs: string = '';
  price: string = '';
  discount: string = '';
  subjects: any[] = [];
  subjectId: string = '';
  chapters: any[] = [];
  classes: any[] = [];
  videoId: string = '';

  showSliderMenu: boolean = true;

  isPopupVisible: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      if (this.id) {
        this.loadClassDetails();
      }
    });

    this.loadClasses();
    this.checkScrollPosition();
  }


  loadClassDetails() {
    // Fetch class details by ID
    this.authService.getClassDetails(this.id).subscribe(
      (data) => {
        // Assuming the API returns class details including name, description
        this.classId = data.classId;
        this.className = data.className;
        this.classDescription = data.classDescription;
        this.classVideos = data.noOfVideos;
        this.classStudents = data.noOfStudents;
        this.classQuizzes = data.noOfQuizzes;
        this.classPdfs = data.noOfPdfs;
        this.price = data.price;
        this.discount = data.discount;

        this.loadSubjectsByClass();
      },
      (error) => {
        console.error('Error fetching class details', error);
      }
    );
  }

  loadSubjectsByClass() {
    this.authService.getSubjectsByClass(this.classId).subscribe (
      (data) => {
        this.subjects = data;
      },
      (error) => {
        console.error('Error Fetching subjects', error);
      }
    )
  }

  loadChaptersByClassAndSubject(classId: string, subjectId: string) {
    console.log(`Fetching chapters for classId: ${classId}, subjectId: ${subjectId}`);
    this.authService.getChaptersByClassAndSubject(classId, subjectId).subscribe(
      (data) => {
        console.log('Chapters fetched:', data);
        this.chapters = data;
      },
      (error) => {
        console.error('Error fetching chapters', error);
      }
    );
  }
  
  onSubjectClick(sid: string) {
    console.log('Selected Subject ID:', sid); // Log the selected subjectId
    this.subjectId = sid;
    this.loadChaptersByClassAndSubject(this.classId, this.subjectId);
  }

  loadClasses(){
    this.authService.getClasses().subscribe(
      (data) => {
        this.classes = data;
      },
      (error) => {
        console.error('Error fetching classes', error);
      }
    )
  }

  // Logic for the slider menu
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    this.showSliderMenu = window.scrollY > 0;
  }

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  // Adding annotation to communicate with the Child component
  @ViewChild(VideoPopupComponent) previewPopup!: VideoPopupComponent;

  openVideoPopup(videoId: string) {
    this.previewPopup.openPopup(videoId);
  }


  // Adding form data to the API
  expressInterestData = {
    studentName: '',
    email: '',
    mobile: '',
    classId: ''
  };

  onSubmit(form: NgForm) {
    const { studentName, email, mobile, classId } = this.expressInterestData;

    if (form.valid) {
      this.authService.addExpressInterest(this.expressInterestData).subscribe(
        (res) => {
          console.log(res);
          alert("Form Submitted Sucessfully ! ");
          form.reset();
        },
        (error) => {
          console.error('Error submitting form', error);
          alert('Failed to submit form. Please try again.');
        }
      );
    } else {
      alert('Please fill out all required fields.');
    }
  }

}
