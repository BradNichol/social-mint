import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-insta-auth-button',
  templateUrl: './insta-auth-button.component.html',
  styleUrls: ['./insta-auth-button.component.css']
})
export class InstaAuthButtonComponent implements OnInit {

  private CLIENT_ID = 286201962879513;
  private REDIRECT_URL = "https://boring-wozniak-d2cbcf.netlify.app/insta-auth"


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  authWindow() {
      window.open(
          'https://api.instagram.com/oauth/authorize?'+
          `client_id=${this.CLIENT_ID}`+
          `&redirect_uri=${this.REDIRECT_URL}`+
          '&scope=user_profile,user_media&response_type=code',
          "child",
          "width=430,height=400,left=500,top=100"
        );
  }

}
