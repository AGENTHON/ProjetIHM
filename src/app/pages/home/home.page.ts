import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from 'src/app/api/user.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    userList$: Observable<any>;

    constructor(
        public router: Router,
        public userService: UserService
    ) {
    }

    async selectedUser(id: number) {
        await this.router.navigate(['user-detail', id]);
    }

    logout() {
        this.userService.logout();
    }

    createUser() {
        this.userService.postUserDetail(document.querySelector('#user-name').innerHTML,
            document.querySelector('#user-job').innerHTML);
        this.userList$ = this.userService.getUserList();
    }

    deleteUser(id: number) {
        this.userService.deleteUserDetail(id);
        this.userList$ = this.userService.getUserList();
    }



    ngOnInit(): void {
        this.userList$ = this.userService.getUserList();
    }

}
