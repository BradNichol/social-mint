import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-insta-auth',
  templateUrl: './insta-auth.component.html',
  styleUrls: ['./insta-auth.component.css']
})
export class InstaAuthComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {console.log(params)})

    this.route.queryParamMap
      .subscribe((params) => {
        this.paramsObject = { ...params.keys, ...params };
        console.log(this.paramsObject);
      }
    );
  }

}
