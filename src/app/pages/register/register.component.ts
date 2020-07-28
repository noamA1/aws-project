import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

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

  selectedFile: ImageSnippet;

  fileObj: File;
  fileUrl: string;
  errorMsg: boolean;
  fileForm = new FormData();

  URL = 'http://ec2-3-234-56-126.compute-1.amazonaws.com‏';
  constructor(public auth: AuthService, private router: Router) {
    this.errorMsg = false;
  }

  ngOnInit() {
  }

  signUp() {

    // this.auth.register(this.email, this.password, this.firstname, this.lastname, this.gender);
    this.router.navigate(['/register-confrim']);
    // console.log(this.gender)
    // console.log(this.firstname)
    // console.log(this.lastname)
    // console.log(this.email)
    // console.log(this.password)
    // console.log(this.fileObj);

  }

  onFilePicked(imageInput: any) {

    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.auth.sendImage(this.selectedFile.file).subscribe(
        (res) => {
        
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }
  }
  
  // onFilePicked(event: Event): void {

  //   this.errorMsg = false;
  //   console.log(event);
  //   const FILE = (event.target as HTMLInputElement).files[0];
  //   this.fileObj = FILE;

  //   // console.log(this.fileObj);
  // }
  // sendImge() {
  //   console.log(this.fileObj);
  //   // this.auth.senImage(this.fileObj);
  //   if (!this.fileObj) {
  //     this.errorMsg = true;
  //     return
  //   }

  
    // this.fileForm.append('image', this.fileObj);
  //   this.auth.sendImage(this.fileForm).subscribe(res => {
  //     console.log(res);
  //     this.fileUrl = res['image'];
  //     console.log(this.fileUrl);
  //   });
  // }
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
// }