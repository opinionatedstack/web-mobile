import { Component, OnInit, Input } from '@angular/core';
import { StripePaymentsService } from '../../../services/stripe-payments/stripe-payments.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-subscription-detail',
  templateUrl: './subscription-detail.component.html',
  styleUrls: ['./subscription-detail.component.scss']
})
export class SubscriptionDetailComponent implements OnInit {
  @Input() stripeSubscriptionId;
  subscription: any;

  constructor(private stripe: StripePaymentsService,
              private router: Router,
              private snackMessage: MatSnackBar,
              private auth: AuthService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.stripe.getSubscriptionById({
      stripeSubscriptionId: this.stripeSubscriptionId
    })
      .subscribe( r => {
        this.subscription = r;
      }, e => {
        this.snackMessage.open('Error getting subscription', 'x',{verticalPosition: 'top'});
      });
  }

  cancelSubscription() {
    this.stripe.cancelSubscription({
      stripeSubscriptionId: this.stripeSubscriptionId
    })
      .subscribe( async r => {
        this.snackMessage.open('Subscription cancelled', 'x',{verticalPosition: 'top'});
        this.loadData();

        try {
          this.auth.getTokenSilently$({ ignoreCache: true });
        } catch (e) {
          console.log('error in getTokenSilently$', e);
        }

        const auth0AppMetadata: any = await this.auth.getTokenClaim(environment.auth0.namespace + 'app_metadata');
        console.log('thanks onInit. got auth0 app metadata');
        console.log(JSON.stringify(auth0AppMetadata, null, 4));

        const roles: any = await this.auth.getTokenClaim(environment.auth0.namespace + 'roles');
        console.log('thanks onInit. got auth0 app roles');
        console.log(JSON.stringify(roles, null, 4));
      }, e => {
        this.snackMessage.open('Error getting subscription', 'x',{verticalPosition: 'top'});
      });
  }

  upgradeSubscription() {
    this.router.navigate(['/private/signup', this.stripeSubscriptionId]);
  }

}
