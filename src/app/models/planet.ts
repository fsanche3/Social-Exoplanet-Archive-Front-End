export default class Planet {
    pl_name: string
    hostname: string
    sy_mnum: number
    discoverymethod: string
    disc_year: number
    disc_facility: string
    disc_telescope: string
    pl_orbper: number
    pl_rade: number
    pl_radj: number
    pl_masse: number
    pl_massj: number    
    pl_orbeccen: number


    constructor (pl_name: string, hostname: string, sy_mnum: number, discoverymethod: string, disc_year: number
        , disc_facility: string, disc_telescope: string,pl_orbper: number, pl_rade: number, pl_radj: number, pl_masse: number
        ,pl_massj: number , pl_orbeccen: number ) {
        this.pl_name = pl_name;
        this.hostname = hostname;
        this.sy_mnum = sy_mnum;
        this.discoverymethod =discoverymethod;
        this.disc_year =disc_year;
        this.disc_facility = disc_facility;
        this.disc_telescope = disc_telescope;
        this.pl_orbper =pl_orbper;
        this.pl_rade =pl_rade;
        this.pl_radj =pl_radj;
        this.pl_masse = pl_masse;
        this.pl_massj = pl_massj;
        this.pl_orbeccen =pl_orbeccen;

    }
}