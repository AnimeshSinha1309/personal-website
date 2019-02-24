export class Comment {
    id: string;
    message: string;
    email: string;
    where: string;

    constructor(message: string, email: string, where: string) {
        this.message = message;
        this.email = email;
        this.where = where;
    }
}