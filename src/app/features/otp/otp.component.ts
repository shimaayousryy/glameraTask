import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.component.html',
    styleUrls :[`./otp.component.scss`]
})

export class OtpComponent implements OnInit {
  visible:boolean =false
  
    constructor(
         private router: Router
        ) {

    }

    ngOnInit(): void {
      
    }

    onOtpChange(event){

    }

}
