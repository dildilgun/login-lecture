"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장"],
        password: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            // users에 key값이 있는가
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
            // {} : Object 형태로 넣어주겠다.
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;