import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';

describe('UserService', () => {
    let service: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(UserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('must min price', () => {
        const isMinprice = service.isMinPrice(10);
        expect(isMinprice).toBe(true);
    });

    it('must not be min price', () => {
        const isMinprice = service.isMinPrice(13);
        expect(isMinprice).toBe(false);
    });
});
