
export class ApplicationError extends Error{
    constructor(errMessage,errCode) {
        super(errMessage);
        this.errCode=errCode
    }
}