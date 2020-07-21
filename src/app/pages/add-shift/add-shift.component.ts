import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamInitError, WebcamImage, WebcamUtil } from 'ngx-webcam';

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

  constructor() { }

  ngOnInit(){
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }

  
  public triggerSnapshot(): void {
    this.trigger.next();
  }
//   public toggleWebcam(): void {
//     this.showWebcam = !this.showWebcam;
//   }
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public webcamImage: WebcamImage = null;

  handleImage1(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
}