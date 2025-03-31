import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-express-interest',
  templateUrl: './express-interest.component.html',
  styleUrl: './express-interest.component.css'
})
export class ExpressInterestComponent implements OnInit{
  id: string ='';
  classes: any[] = [];

  isPopupVisible: boolean = false;

  // method to display the form
  openPopup() {
    this.isPopupVisible = true;
  }

  // method to close the form
  closePopup() {
    this.isPopupVisible = false;
  }

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.data$.subscribe(
      (data) => {
        this.classes = data;
      }
    )
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
          // alert('Failed to submit form. Please try again.');
        }
      );
    }
  }
  
}
