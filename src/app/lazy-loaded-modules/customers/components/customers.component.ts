import {Component} from '@angular/core';
import {UserService} from '../../../core/services/user.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customers.component.html',
    providers: [UserService]
})
export class CustomersComponent {
    userName = '';

    constructor(userService: UserService) {
        this.userName = userService.userName;
    }
}
