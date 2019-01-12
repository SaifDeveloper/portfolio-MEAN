import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, OnInit, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  optionsSelect: Array<any>;

  // Variables
  // name:string = "saif";
  // email:string = "saikhsaifali@gmail.com";
  // subject:string = "noSubject";
  // message:string = "nice!!!";

  name:string;
  email:string;
  subject:string;
  message:string;


  constructor(private ngZone: NgZone,private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit() {
    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
    ];
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  // Submit button clicked
  submit(){
    let ContactData = {
      name:this.name,
      email:this.email,
      subject:this.subject,
      message:this.message
    }
    // console.log(JSON.stringify(ContactData));
    // Dev
    // this.http.post("http://localhost:8080/contactme", JSON.stringify(ContactData), httpOptions)
    // Prod
    this.http.post("contactme", JSON.stringify(ContactData), httpOptions)
      .subscribe(
        (data)=>{
          // console.log("Response:",data)
          if(data){
            this.toastr.success('Successfully Submitted!', 'Thank you!');
          }else{
            this.toastr.error('Something went wrong!','Please try again!')
          }
        });



  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  openSocial(social){
    switch(social){
      case 'linkedin':{
          window.open("https://www.linkedin.com/in/saif-ali-3015328b/", "_blank");
      }
      case 'twitter':{
        window.open("https://twitter.com/saikhsaifali", "_blank");
      }
      case 'facebook':{
        window.open("https://www.facebook.com/saif4u", "_blank");
      }
    }
  }


}
