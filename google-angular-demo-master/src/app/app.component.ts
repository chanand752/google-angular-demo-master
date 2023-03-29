import { GoogleLoginProvider, SocialAuthService} from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-google';
  user:any;
  loggedIn:any;
  data: any;
  
  constructor(private authService: SocialAuthService,private readonly http: HttpClient) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log("login");
    
  }

  logout() {
  this.authService.signOut()
  }

  testStatus(status: number): void{
    this.http.get(`https://httpstat.us/${status}`, { observe: "response" }).subscribe(res => {
      console.log(res);
    });
  }

  testData(): void {
    // const query = {
    //   description: 'help ',
    //   Auth: 'OAuth',
    // };
    this.data = null;
    this.http.get('https://api.publicapis.org/entries').subscribe(res => {
      this.data = res
    },
    err => {
      console.log(err) // Error Handling một request?
    });
  }

  testDataRewrite(): void {
    // const query = {
    //   description: 'help ',
    //   Auth: 'OAuth',
    // };
    this.data = null;
    this.http.get('https://api.publicapis.org/entries/abcd').subscribe(res => {
      this.data = res
    },
    err => {
      console.log(err) // Error Handling một request?
    });
  }

  

}
