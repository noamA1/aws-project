import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  gender: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;

  fileObj: File;
  fileUrl: string;
  errorMsg: boolean;

  constructor() { 
    this.errorMsg = false;
  }

  ngOnInit() {
  }

  signUp(){
    console.log(this.gender)
    console.log(this.firstname)
    console.log(this.lastname)
    console.log(this.email)
    console.log(this.password)

  }

  onFilePicked(event: Event): void {

    this.errorMsg = false;
    console.log(event);
    const FILE = (event.target as HTMLInputElement).files[0];
    this.fileObj = FILE;
    console.log(this.fileObj);
  }
  
  // onFileUpload() {

  //   if (!this.fileObj) {
  //     this.errorMsg = true;
  //     return
  //   }
    
  //   const fileForm = new FormData();
  //   fileForm.append('file', this.fileObj);
  //   this.fileUploadService.fileUpload(fileForm).subscribe(res => {
  //     console.log(res);
  //     this.fileUrl = res['image'];
  //   });
  // }
}