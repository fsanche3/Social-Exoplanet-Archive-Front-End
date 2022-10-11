// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  withCredentials: false,
  baseUrl: "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+pl_name,hostname,sy_mnum,discoverymethod,disc_year,disc_facility,disc_telescope,pl_orbper,pl_rade,pl_radj,pl_masse,pl_massj,pl_orbeccen+from+ps&format=json",
  stageUrl: "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+pl_name,hostname,sy_mnum,discoverymethod,disc_year,disc_facility,disc_telescope,pl_orbper,pl_rade,pl_radj,pl_masse,pl_massj,pl_orbeccen+from+ps+where+pl_name+=+",
  apiUrl: "http://localhost:8080/",

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
