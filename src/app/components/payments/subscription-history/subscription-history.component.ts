import {Component, Input, OnInit} from '@angular/core';
import {StripePaymentsService} from '../../../services/stripe-payments/stripe-payments.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-subscription-history',
  templateUrl: './subscription-history.component.html',
  styleUrls: ['./subscription-history.component.scss']
})
export class SubscriptionHistoryComponent implements OnInit {
  @Input() stripeCustomerId;
  stripeSubscriptions: any;

  constructor(private stripe: StripePaymentsService,
              private snackMessage: MatSnackBar) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.stripe.getSubscriptionsByCustomerId({
      stripeCustomerId: this.stripeCustomerId
    })
      .subscribe( r => {
        this.stripeSubscriptions = r;
      }, e => {
        this.snackMessage.open('Error getting subscriptions', 'x',{verticalPosition: 'top'});
      });
  }

}
