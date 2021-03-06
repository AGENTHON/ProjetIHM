import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {IonicModule} from '@ionic/angular';

import {SignupPage} from './signup.page';

describe('SignupPage', () => {
    let component: SignupPage;
    let fixture: ComponentFixture<SignupPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignupPage],
            imports: [
                IonicModule.forRoot(),
                HttpClientTestingModule,
                RouterTestingModule,
                FormsModule,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(SignupPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
