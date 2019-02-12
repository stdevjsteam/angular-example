import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Customer, CustomersService} from '../services/customers.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customers-detail.component.html'
})
export class CustomersDetailComponent implements OnInit, OnDestroy {
    customer: Customer;
    private customerSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private customersService: CustomersService) {
    }

    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.customerSubscription = this.customersService.getCustomer(id).subscribe(customer => this.customer = customer);
    }

    ngOnDestroy(): void {
        if (this.customerSubscription) {
            this.customerSubscription.unsubscribe();
        }
    }
}
