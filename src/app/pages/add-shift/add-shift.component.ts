import { AttendanceService } from './../../shared/attendance.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-shift',
  templateUrl: './add-shift.component.html',
  styleUrls: ['./add-shift.component.css']
})
export class AddShiftComponent implements OnInit {
  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();
  public showWebcam = true;
  public deviceId: string;
  public errors: WebcamInitError[] = [];
  public multipleWebcamsAvailable = false;
  private trigger: Subject<void> = new Subject<void>();
  fileImage: File;

  constructor(private attendencesrervice: AttendanceService) { }

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
    const image = this.DataURIToBlob(webcamImage.imageAsDataUrl)
    const fd = new FormData();
    fd.append('rekog-image', image, "image.jpeg");
    console.log(fd)
    this.attendencesrervice.entranceAttendance(fd);
  }
  DataURIToBlob(dataURI: string): Blob {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }


}