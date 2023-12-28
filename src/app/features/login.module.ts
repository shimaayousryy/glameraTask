import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgOtpInputModule } from "ng-otp-input";
import { OtpComponent } from "./otp/otp.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
];
@NgModule({
    declarations: [
        LoginComponent ,
        OtpComponent
    ],
    imports: [
        RouterModule.forChild(routes)
       ,CarouselModule
       ,NgOtpInputModule
    ],
    providers: [
    ],
    exports:[
        LoginComponent,
        OtpComponent
    ]
})
export class LoginModule { }
