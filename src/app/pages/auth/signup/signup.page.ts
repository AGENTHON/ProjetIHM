import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {UserService} from 'src/app/api/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, OnDestroy {
    email: string;
    password: string;
    passwordMatch: string;
    signup$: Subscription;

    constructor(
        public router: Router,
        public userService: UserService,
        public alertCtrl: AlertController
    ) {
    }

    ngOnInit() {
        console.log('SignupPage init');
    }

    onSignup = async () => {
        // Check passwords match
        if (!this.password || this.password !== this.passwordMatch) {
            const alert = await this.alertCtrl.create({
                header: 'Alert',
                message: 'Les mots de passes doivent correspondre',
                buttons: ['OK'],
            });
            return await alert.present();
        }

        this.signup$ = this.userService
            .signup(this.email, this.password)
            .subscribe(async (isLoggued) => {
                if (isLoggued) {
                    await this.router.navigateByUrl('home');
                } else {
                    const alert = await this.alertCtrl.create({
                        header: 'Alert',
                        message: 'Oups, essayez avec eve.holt@reqres.in / pistol',
                        buttons: ['OK'],
                    });
                    await alert.present();
                }
            });
    }

    ngOnDestroy(): void {
        this.signup$.unsubscribe();
    }
}
