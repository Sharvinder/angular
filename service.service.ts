import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data:any;

  getData() {
    this.data= [{fullName:'Amit Roy', dob:'01-01-2007', emailAddress:'sha@hs.com',
    mobileNumber:'123456789',salary:'9294'}];  
  }  
  returnStudentData(): Array<any> {  
    return this.data;  
}

addStudentData(item: any): void {  
  this.data.push(item);  
}  
}
