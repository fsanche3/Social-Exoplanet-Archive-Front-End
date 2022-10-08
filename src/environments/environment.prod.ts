export const environment = {
  production: false,
  withCredentials: false,
  baseUrl: "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+pl_name,hostname,sy_mnum,discoverymethod,disc_year,disc_facility,disc_telescope,pl_orbper,pl_rade,pl_radj,pl_masse,pl_massj,pl_orbeccen+from+ps&format=json",
  stageUrl: "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+pl_name,hostname,sy_mnum,discoverymethod,disc_year,disc_facility,disc_telescope,pl_orbper,pl_rade,pl_radj,pl_masse,pl_massj,pl_orbeccen+from+ps+where+pl_name+=+",

};

