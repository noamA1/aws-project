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

  constructor(private http: HttpClient) { }

  ngOnInit(){
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
    console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
    const fd = new FormData();
    fd.append('rekog-image', 'data:image/jpeg;base64,'+webcamImage, "image");
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/curd/postAttendance",
    fd).subscribe(res =>{
      console.log(res);
    });
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

 
}