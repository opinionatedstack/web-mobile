import { Component, OnInit } from '@angular/core';
import { RestService } from '@src/app/services/rest/rest.service';
import { environment } from '@src/environments/environment';
import { Router } from '@angular/router';
import { EventData } from 'tns-core-modules/data/observable';
import { ListPicker } from 'tns-core-modules/ui/list-picker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public restResult: any;
  public restStatus: string;

  publicPostMessage = 'Public POST message';
  privatePostMessage = 'Private POST message';
  permissionedAdminPostMessage = 'Permissionsed POST message';
  permissionedNeverPostMessage = 'Never permissioned POST message';

  env: any = environment;
  location: string;

  selectedRestTypeIndex = 0;
  public restTypes: Array<string> = ['Public GET', 'Public POST',
    'Private GET', 'Private POST',
    'Private Permissioned POST', 'Private Never Permissioned POST'];

  constructor(private restService: RestService,
              router: Router) { }

  ngOnInit() {

  }

  tryAPI() {
    console.log(this.restTypes[this.selectedRestTypeIndex]);
    this.restResult = null;
    this.restStatus = null;

    switch (this.restTypes[this.selectedRestTypeIndex]) {
      case 'Public GET':
        this.publicGet();
        break;
      case 'Public POST':
        this.publicPost();
        break;
      case 'Private GET':
        this.privatePost();
        break;
      case 'Private POST':
        this.privatePost();
        break;
      case 'Private Permissioned POST':
        this.privateRequirePostPermission();
        break;
      case 'Private Never Permissioned POST':
        this.privateNeverPermissionedPost();
        break;
      default:
        console.log ('restType didn\'t match');
    }
  }

  stringifyResult(result) {
    return JSON.stringify(result, null, 4);
  }

  publicGet() {
    this.restResult = { status: 'loading'};

    this.restService.publicGet()
      .subscribe ( result => {
        this.restResult = result;
        this.restStatus = 'success';
      }, error => {
        this.restResult = error;
        this.restStatus = 'failure';
      });

  }

  publicPost() {
    this.restResult = { status: 'loading'};

    this.restService.publicPost( { myData: this.publicPostMessage })
      .subscribe ( result => {
        this.restResult = result;
        this.restStatus = 'success';
      }, error => {
        this.restResult = error;
        this.restStatus = 'failure';
      });
  }

  privateGet() {
    this.restResult = { status: 'loading'};

    this.restService.privateGet()
      .subscribe ( result => {
        this.restResult = result;
        this.restStatus = 'success';
      }, error => {
        this.restResult = error;
        this.restStatus = 'failure';
      });
  }

  privatePost() {
    this.restResult = { status: 'loading'};

    this.restService.privatePost( { myData: this.privatePostMessage })
      .subscribe ( result => {
        this.restResult = result;
        this.restStatus = 'success';
      }, error => {
        this.restResult = error;
        this.restStatus = 'failure';
      });
  }

  privateRequirePostPermission() {
    this.restResult = { status: 'loading'};

    this.restService.privateRequirePostPermission( { myData: this.permissionedAdminPostMessage })
      .subscribe ( result => {
        this.restResult = result;
        this.restStatus = 'success';
      }, error => {
        this.restResult = error;
        this.restStatus = 'failure';
      });
  }

  privateNeverPermissionedPost() {
    this.restResult = { status: 'loading'};

    this.restService.privateRequireNeverPermission( {myData: 'Hello, World!'})
      .subscribe ( result => {
        this.restResult = result;
        this.restStatus = 'success';
      }, error => {
        this.restResult = error;
        this.restStatus = 'failure';
      });
  }

  // Eye candy: just a little color
  getClassFromStatus( resultObj ) {
    switch (resultObj.status) {
      case 'Click above to try':
        return 'idle';
        break;
      case 'loading':
        return 'loading';
        break;
      case 'success':
        return 'success';
        break;
      default:
        return 'failure';
        break;
    }
  }

  getDisplayURL( restServiceURL ) {
    if (restServiceURL.indexOf('http') === 0 ){
      return restServiceURL;
    }
    else {
      return this.location + restServiceURL;
    }
  }

  parseInt( x: string ) {
    return parseInt(x, 10);
  }

  public onSelectedIndexChanged(args: EventData) {
    this.selectedRestTypeIndex = (<ListPicker> args.object).selectedIndex;
  }

}
