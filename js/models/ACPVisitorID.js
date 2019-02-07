/** ***********************************************************************
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
*
* @flow
* @format
*/

'use strict';

import type {ACPMobileVisitorAuthenticationState} from './ACPMobileVisitorAuthenticationState';

class ACPVisitorID {
  idOrigin: string;
  idType:   string;
  id:       string;
  authenticationState: ACPMobileVisitorAuthenticationState;

  constructor(idOrigin?: string, idType: string, id?: string, authenticationState?: ACPMobileVisitorAuthenticationState) {
    this.idOrigin = idOrigin;
    this.idType = idType;
    this.id = id;
    this.authenticationState = authenticationState;
  }

}

module.exports = ACPVisitorID;
