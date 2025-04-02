export type userRole='Librarian'|'user';

export class User {
    constructor(
readonly id:string,
readonly name:string,
readonly email:string,
readonly type:string,
readonly token:string,
readonly refreshToken:string,
readonly checkedOutBook?:string[],
    ){}
}