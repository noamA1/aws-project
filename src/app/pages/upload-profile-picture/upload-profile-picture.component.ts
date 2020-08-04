import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-upload-profile-picture',
  templateUrl: './upload-profile-picture.component.html',
  styleUrls: ['./upload-profile-picture.component.css']
})
export class UploadProfilePictureComponent implements OnInit {

  fileObj: File;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  onFilePicked(event) {
    this.fileObj = event.target.files[0] as File;
  }
  
  sendImge() {
    const fd = new FormData();
    fd.append('image', this.fileObj, this.fileObj.name);
    this.auth.sendImage(fd);
  }
}
