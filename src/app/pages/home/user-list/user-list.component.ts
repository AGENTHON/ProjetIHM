import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
    @Input()
    userList: any;

    @Output()
    selectedUser = new EventEmitter<number>();
    @Output() 
    deleteUser = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }
}
