import { Injectable } from '@angular/core';

@Injectable()
export class LicenseService {
    calculateFee(data) {
        if (data.licenseType === 'personal') {
            return 9;
        } else {
            return 10;
        }
    }
}
