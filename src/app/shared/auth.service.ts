import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'http://ec2-3-234-56-126.compute-1.amazonaws.com‏';
  constructor(private http: HttpClient, private router: Router) { }

  register(email: string, password: string, firstName: string, lastName: string, gender: string, age) {
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/signup", {
      email: email, password: password,
      firstName: firstName, lastName: lastName, gender: gender, age: age
    }).subscribe(
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
    this.router.navigate(['/register-confrim'], { state: { email: email } });
  }

  logIn(email, password) {
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/login", { email, password }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          val);

      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
        this.router.navigate(['/dashboard'], { state: { email: email, message: true } });
      });

  }

  getUser(email) {
    return this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/getUser",
      { email: email }).pipe(map(user => {
        return user
      }))
  }

  sendImage(image: FormData) {
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/post-image",
      image).subscribe(res => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      });
  }

  isloggedin() {
    return this.http.get("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/isLoggedIn")
      .pipe(map(data => data));
  }

  confirmFunction(email: string, code) {
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/confirm",
      { email: email, confirmationCode: `${code}` }).subscribe(res => {
        console.log(res);
        this.router.navigate(['/upload']);
      });
  }

  updateProfile(fname, lname, id, age, gender) {
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/editUser",
      { firstName: fname, lastName: lname, id: id, age: age, gender: gender }).subscribe(res => {
        console.log(res);
      });

  }
  logout() {
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/logout", {})
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/login']);
      })
  }
}
