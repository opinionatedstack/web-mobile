import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  async getStripeCustomerId() {
    //const user = await this.auth.getUser$().toPromise();
    //console.log(JSON.stringify(user));
    //const appMetadata = await this.auth.getTokenClaim(environment.auth0.namespace + 'app_metadata');
    //return appMetadata.stripe_customer_id;
  }

}
