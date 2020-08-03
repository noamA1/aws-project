import { AttendanceService } from './../../shared/attendance.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css']
})
export class AddShiftComponent implements OnInit {
  @ViewChild('img', { static: true }) img: ElementRef;
  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();
  public showWebcam = true;
  public deviceId: string;
  public errors: WebcamInitError[] = [];
  public multipleWebcamsAvailable = false;
  private trigger: Subject<void> = new Subject<void>();
  fileImage: File;
  imageWeb;
  attendanceResponse;
  computed;

  constructor(private attendencesrervice: AttendanceService, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state !== undefined) {
      this.computed = this.router.getCurrentNavigation().extras.state.computed
      console.log(this.computed)
    }
  }

  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }


  public triggerSnapshot(): void {
    this.trigger.next();
  }

  handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
  public handleImage(webcamImage: WebcamImage): void {
    this.imageWeb = webcamImage;
    const image = this.DataURIToBlob(webcamImage.imageAsDataUrl)
    const fd = new FormData();
    fd.append('rekog-image', this.fileImage, this.fileImage.name);
    if (this.computed != undefined) {
      this.attendanceResponse = this.attendencesrervice.exitAttendance(this.computed,fd);
    }
    else {
      this.attendanceResponse = this.attendencesrervice.entranceAttendance(fd);
    }
    console.log(this.attendanceResponse)
  }
  DataURIToBlob(dataURI: string): Blob {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    // const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    this.fileImage = new File([ia], "image.jpg", { type: "image/png", "lastModified": new Date().getUTCMilliseconds() })
    return new Blob([ia], { type: "jpg" });
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}