class AppError extends Error {
    status(status: any) {
        throw new Error("Method not implemented.");
    }
    statusCode: number;
    constructor(message: string, statusCode: number = 400){
        super(message);
        this.statusCode = statusCode;
    }
}

export default AppError;