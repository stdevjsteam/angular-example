import {Component} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
})
export class TitleComponent {
    title = 'Angular Template';
    user = '';

    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}
