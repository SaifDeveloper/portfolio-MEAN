import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, OnInit, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
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
  name:string = "saif";
  email:string = "saikhsaifali@gmail.com";
  subject:string  = "feedback";
  message:string = "It's nice!";


  constructor(private ngZone: NgZone,private http: HttpClient) { }

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
    console.log(JSON.stringify(ContactData));
    try{
      return this.http.post("http://localhost:3000/contactme", JSON.stringify(ContactData), httpOptions)
    }catch(err){
      this.handleError(err);
    }
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

}
