import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginComponent } from "./login/login.component";
import { EqualValidator } from "./signup/equal-validator.directive";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        SignupComponent,
        ForgotPasswordComponent,
        EqualValidator
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { 
                path: '', 
                component: AuthComponent,
                children: [
                    {path: 'login', component: LoginComponent},
                    {path: 'signup', component: SignupComponent},
                    {path: 'forgotpassword', component: ForgotPasswordComponent},    
                ]
            }

        ])
    ]
  })
  export class AuthModule {}