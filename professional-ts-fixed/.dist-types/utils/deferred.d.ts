declare class Deferred {
    #private;
    constructor();
    get promise(): any;
    get resolve(): any;
    get reject(): any;
}
export default Deferred;
