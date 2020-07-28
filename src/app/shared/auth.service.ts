import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'http://ec2-3-234-56-126.compute-1.amazonaws.com‏';
  constructor(private http: HttpClient) { }

  register(email:string, password: string, firstName: string, lastName:string, gender:string){
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/signup",{email: email, password: password,
    firstName: firstName, lastName: lastName, gender: gender, age:"30"}).subscribe(
       (val) => {
           console.log("POST call successful value returned in body", 
                       val);
       },
       response => {
           console.log("POST call in error", response);
       },
       () => {
           console.log("The POST observable is now completed.");
       });
      }
  
  logIn(email, password){
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/login",{email, password}).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  getUser(){
    return this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/getUser",
          {email:"noam0574@gmail.com"}).pipe(map(user => {
            return user
          }))
    // return this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/getUser",
    //       {email:"noam0574@gmail.com"}).subscribe(
    //         (val) => {
    //             console.log("POST call successful value returned in body", 
    //                   val);
    //                   return val
                    
    //   },
    //   response => {
    //       console.log("POST call in error", response);
    //   },
    //   () => {
    //       console.log("The POST observable is now completed.");
    //   });
  }

  sendImage(image: File){
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/post-image",
    formData);
  }
  //   console.log(file)
  //  return this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/post-image",
  //         {image:file})
  // }
}
