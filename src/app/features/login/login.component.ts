import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls :[`./login.component.scss`]
})

export class LoginComponent implements OnInit {
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        margin:0,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        autoWidth:true,

        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 1
          },
          940: {
            items: 1
          }
        },
        nav: true
      }
    
    constructor(
         private router: Router
        ) {

    }

    ngOnInit(): void {
      
    }

    submitOtp(){
      this.router.navigate(['/business'])
    }

}
