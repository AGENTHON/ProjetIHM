import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {UserService} from 'src/app/api/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
    email: string;
    password: string;
    login$: Subscription;

    constructor(
        public router: Router,
        public userService: UserService,
        public alertCtrl: AlertController
    ) {
    }

    ngOnInit() {
        console.log('LoginPage init');
    }

    onLogin = () => {
        this.login$ = this.userService
            .login(this.email, this.password)
            .subscribe(async (isLoggued) => {
                if (isLoggued) {
                    await this.router.navigateByUrl('home');
                } else {
                    const alert = await this.alertCtrl.create({
                        header: 'Alert',
                        message: 'Email ou mot de passe invalide',
                        buttons: ['OK'],
                    });
                    await alert.present();
                }
            });
    }

    onSignup = () => {
        this.router.navigateByUrl('auth/signup');
    }

    ngOnDestroy(): void {
        this.login$.unsubscribe();
    }
}
