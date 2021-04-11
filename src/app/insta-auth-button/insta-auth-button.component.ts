import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-insta-auth-button',
  templateUrl: './insta-auth-button.component.html',
  styleUrls: ['./insta-auth-button.component.css']
})
export class InstaAuthButtonComponent implements OnInit {

  private clientId = 286201962879513;
  private redirectUri = "https://e4059a621d55.ngrok.io/insta-auth"


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  authWindow() {
      window.open(
          'https://api.instagram.com/oauth/authorize?'+
          `client_id=${this.clientId}`+
          `&redirect_uri=${this.redirectUri}`+
          '&scope=user_profile,user_media&response_type=code',
        );
  }

}
