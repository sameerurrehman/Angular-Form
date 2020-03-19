import { EnrollmentService } from './enrollment.service';
import { User } from './user';
import { Component } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
   topicHasError = true;
   submitted = false;
   errorMsg = '';

  userModel = new User('', 'sameer11@gmail.com', 3132312642, 'default','morning',true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    } else{
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Sucess!', data),
      error => this.errorMsg = error.statusText
      
    )
  }

}
