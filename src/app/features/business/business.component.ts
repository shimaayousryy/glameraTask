import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-business',
    templateUrl: './business.component.html',
    styleUrls :[`./business.component.scss`]
})

export class BusinessComponent implements OnInit {
    isSalonSelected:boolean =false
    isGymSelected:boolean =false
    isSpaSelected:boolean =false
    isClinicSelected:boolean =false
    constructor(
         private router: Router
        ) {

    }

    ngOnInit(): void {
      
    }
    goBack(){
        this.router.navigate(['/login'])
    }

    onSuccess(){
        this.router.navigate(['/successfull'])
    } 

}
