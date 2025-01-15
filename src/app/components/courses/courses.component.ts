import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

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
  subjects: any[] = [];
  subjectId: string = '';
  chapters: any[] = [];
  classes: any[] = [];

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      if (this.id) {
        this.loadClassDetails();
      }
    });

    this.loadClasses();
  }


  loadClassDetails() {
    // Fetch class details by ID
    this.authService.getClassDetails(this.id).subscribe(
      (data) => {
        // Assuming the API returns class details including name, description
        this.classId = data.classId;
        this.className = data.className;
        this.classDescription = data.classDescription;

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
}
