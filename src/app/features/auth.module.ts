import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgOtpInputModule } from "ng-otp-input";
import { OtpComponent } from "./otp/otp.component";
import { BusinessComponent } from "./business/business.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SuccessfullComponent } from "./successfull/successfull.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    {path :'business' , component :BusinessComponent },
    {path :'successfull' , component :SuccessfullComponent }

];
@NgModule({
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [
        LoginComponent ,
        OtpComponent ,
        BusinessComponent,
        SuccessfullComponent
    ],
    imports: [
        RouterModule.forChild(routes)
       ,CarouselModule
       ,NgOtpInputModule
       ,FormsModule
       ,ReactiveFormsModule
       ,CommonModule

    ],
    providers: [
    ],
    exports:[
        LoginComponent,
        OtpComponent , 
        BusinessComponent,
        SuccessfullComponent
    ]
})
export class AuthModule { }
