import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  title = 'User Form';
 registerForm: FormGroup;
  submitted=false;
  canvasWidth: number;
  imageSrc ='/assets/logo-default.jpg';
  canvasHeight: number;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      emailAddress: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      salary: ['', Validators.required]
    });
  }

  generateImage(isCircle = false): void {
    // this.canvas.nativeElement.style.border = '4px solid green';
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
     this.canvasWidth=canvas.width = 200;
     this.canvasHeight=canvas.height = 200;
    if (isCircle) {
      // this.canvas.nativeElement.style.borderRadius = '225px';
      context.arc(this.canvasWidth / 2,this.canvasHeight / 2, this.canvasWidth / 2, 0, 2 * Math.PI);
      context.clip();
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.src = this.imageSrc;
    image.onload = () => {
      context.drawImage(image, 0, 0, this.canvasWidth, 200);
    };
  }

  handleFileUpload(event): void {
    console.log(event);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = () => {
      this.imageSrc = fileReader.result as string;
      this.generateImage();
    };
  }


  get f() 
  {
    
    return this.registerForm.controls; 
  }

    onSubmit() {
      this.submitted = true;
      console.log(this.registerForm.value)
              // stop here if form is invalid
              if (this.registerForm.invalid) {
                  return;
              }
              this.showDetails(this.registerForm);
              alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    
    }


    showDetails(registerForm){


    }
   
    }
