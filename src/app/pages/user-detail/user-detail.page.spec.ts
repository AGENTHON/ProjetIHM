import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UserDetailPage} from './user-detail.page';

describe('UserDetailPage', () => {
    let component: UserDetailPage;
    let fixture: ComponentFixture<UserDetailPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserDetailPage],
            imports: [IonicModule.forRoot(), HttpClientTestingModule]
        }).compileComponents();

        fixture = TestBed.createComponent(UserDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
