import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from 'src/app/api/user.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.page.html',
    styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
    userDetail$: Observable<any>;
    private selectedUserId: number;

    constructor(
        public userService: UserService,
        public actRoute: ActivatedRoute
    ) {
    }

    deleteUser(id: number) {
        this.userService.deleteUserDetail(id);
    }

    ngOnInit() {
        this.selectedUserId = this.actRoute.snapshot.params.id;
        this.userDetail$ = this.userService.getUserDetail(this.selectedUserId);
    }

}
