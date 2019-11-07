import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {StripePaymentsService} from '../stripe-payments/stripe-payments.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionMgmtService {

  constructor(private auth: AuthService,
              private stripe: StripePaymentsService,
              private snackMessage: MatSnackBar) { }

  async checkUsersSubscriptions () {

    const appMetadata: any = await this.auth.getTokenClaim('http://opinionatedstack.com/app_metadata');
    const roles: any = await this.auth.getTokenClaim('http://opinionatedstack.com/roles');

    console.log(JSON.stringify(appMetadata, null, 4));

    const params = {
      status: 'active',
      stripeCustomerId: appMetadata.stripe_customer_ids[0],
      size: 10 //there should only be one
    };

    this.stripe.getSubscriptionsByCustomerId(params)
      .subscribe( r => {
        console.log(JSON.stringify(r, null, 4));
        // TODO: make sure there is an active subscription
        // TODO: update auth0 roles if the subscription is not correct
        // TODO: store user subscription state for use in UI
      }, e => {
        this.snackMessage.open('Error loading getSubscriptionById', null,{duration:  environment.snackBarDuration});
      });
  }
}
